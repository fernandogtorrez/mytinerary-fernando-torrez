const User = require('../models/users')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'pruebadeusuario195@gmail.com',
            pass:'talerista'
        }
    })

    let sender = 'pruebadeusuario195@gmail.com'
    let mailOptions = {
        from: sender,
        to: email,
        subject: 'User email verification',
        html: `
        <div >
        <h1 style="color:red">Presiona <a href=https://mytinerary-torrez-fernando.herokuapp.com/api/V1/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
        </div>
        `
    }

    await transporter.sendMail(mailOptions, function(error, response){
        if(error){console.log(error)}
        else{console.log('Message sent')}
    })
}

const usersControllers = {
    verifyEmail: async (req, res) => {
        const { uniqueString } = req.params;

        const user = await User.findOne({uniqueString: uniqueString})
        console.log(user);
        if(user){
            user.emailVerificado = true
            await user.save()
            res.redirect('https://mytinerary-torrez-fernando.herokuapp.com/')
        }
        else{ res.json({ success: false, response: 'Your email has not been verified'})}
    },

    signUpUser: async (req,res) => {
        let {firstName, lastName, email, password, userPhoto,country, from} = req.body.userData
        console.log(password);

        try{
            const usuarioExiste = await User.findOne({email}) //BUSCAR SI EL USUARIO YA EXISTE EN DB

            if(usuarioExiste){
                console.log(usuarioExiste.from.indexOf(from))
                if(usuarioExiste.from.indexOf(from) === 0){
                    console.log('resultado de if '+(usuarioExiste.from.indexOf(from) === 0))
                    res.json({
                        success: false,
                        from: 'signup',
                        message: 'You have already done your SignUp in this way, please SignIn'
                    })
                }else{
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)

                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada)
                    if(from === 'form-Signup'){
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString)
                        res.json({
                            success: true,
                            from: 'signup',
                            message: 'We sent you an email to validate it, please verify your email to complete the signUp and add it to your SignIn methods'
                        })
                    }else{
                        usuarioExiste.save()

                        res.json({
                            success: true,
                            from:'signup',
                            message: 'We add '+from+' to your means to signIn'
                        })
                    }
                }
            }else{
                //SI EL USUARIO NO EXISTE

                const contraseñaHasheada = bcryptjs.hashSync(password, 10) // LO CREA Y LO ENCRIPTA LA CONTRASEÑA
                console.log(contraseñaHasheada)

                const nuevoUsuario = await new User({
                    firstName,
                    lastName,
                    email,
                    password:[contraseñaHasheada],
                    userPhoto,
                    country,
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    emailVerificado: false,
                    from:[from],
                })

                //SE LO ASIGNA AL USUARIO NUEVO
                if(from !== 'form-Signup'){
                    await nuevoUsuario.save()
                    res.json({
                        success:true,
                        from: 'signup',
                        message: 'Congratulations your user has been created with '+from
                    })// AGREGAMOS MENSAJE DE VERIFICACION
                }else{
                    // PASAR EMAIL VERIFICADO A FALSE
                    // ENVIARLE EL EMAIL PARA VERIFICAR
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString)// LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'We sent you an email to validate it, please verify your email to complete the signUp'
                    })// AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        }catch(error){
            console.log(error);
            res.json({
                success: false,
                message: 'Something went wrong, try again in a few minutes'
            })// CAPTURA EL ERROR
        }
    },

    signInUser: async (req, res) => {
        const {email, password, from} = req.body.logedUser
        try{
            const usuarioExiste = await User.findOne({email})

            if(!usuarioExiste){// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({
                    success: false,
                    message: 'Your user has not been registered, signUp'
                })
            }else{
                if(from !== 'form-Signin'){
                    let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))

                    if(contraseñaCoincide.length > 0){
                        const userData = {
                            id: usuarioExiste._id,
                            firstName: usuarioExiste.firstName,
                            lastName: usuarioExiste.lastName,
                            email : usuarioExiste.email,
                            userPhoto: usuarioExiste.userPhoto,
                            from : usuarioExiste.from
                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60* 60*24})
                        
                        res.json({
                            success: true,
                            from: from,
                            response: {token, userData},
                            message: `Welcome again ${userData.firstName} ${userData.lastName}`,
                        })
                    }else{
                        res.json({
                            from: from,
                            message:'You have not registered with '+from+' if you want to enter with this method you must do the signUp with '+from
                        })
                    }
                }else{
                    if(usuarioExiste.emailVerificado){
                        let contraseñaCoincide = usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(contraseñaCoincide)
                        console.log('resultado de busqueda de contraseña: '+(contraseñaCoincide.length > 0))
                        if(contraseñaCoincide.length > 0){
                            const userData ={
                                id: usuarioExiste._id,
                                firstName: usuarioExiste.firstName,
                                lastName: usuarioExiste.lastName,
                                email: usuarioExiste.email,
                                userPhoto: usuarioExiste.userPhoto,
                                from: usuarioExiste.from
                            }
                            const token = jwt.sign({userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                            res.json({
                                success: true,
                                from: from,
                                response: {token, userData},
                                message: `Welcome again ${userData.firstName} ${userData.lastName}`,
                            })
                        }else{
                            res.json({
                                success:false,
                                from: from,
                                message: 'The username or the password do not match',
                            })
                        }
                    }else{
                        res.json({
                            success: false,
                            from: from,
                            message: 'You have not verified your email, please verify your email to complete your signUp'
                        })
                    }
                }// SI NO ESTA VERIFICADO
            }
        }catch(error){
            console.log(error);
            res.json({
                success:false,
                message: 'Something went wrong, try again in a few minutes'
            })
        }
    },
    signOutUser: async(req, res) => {
        const email = req.body.closeuser
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log('Closed session '+email))
    },
    verificarToken:(req, res) => {
        console.log(req.user)
        if(!req.err){
        res.json({success:true,
                  response:{id:req.user.id, firstName:req.user.firstName,lastName:req.user.lastName,email:req.user.email,userPhoto: req.user.userPhoto,country:req.user.country, from:"token"},
                  message:"Welcome again "+req.user.firstName}) 
        }else{
            res.json({success:false,
            message:"Please signIn again"}) 
        }
    }
}

module.exports = usersControllers