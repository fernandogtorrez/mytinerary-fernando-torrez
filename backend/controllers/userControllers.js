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
            user: 'miemaildegmail',
            pass:'clavedegmail'
        }
    })

    let sender = 'miemaildegmail'
    let mailOptions = {
        from: sender,
        to: email,
        subject: 'Verificacion de email usuario',
        html:`<h1>link</h1>`
    }

    await transporter.sendMail(mailOptions, function(error, response){
        if(error){console.log(error)}
        else{console.log('Mensaje enviado')}
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
            res.redirect('http://localhost:3000/')
        }
        else{ res.json({ success: false, response: 'Su email no se ha verificado'})}
    },

    signUpUsers: async (req,res) => {
        console.log(req.body)
        let {firstName, lastName, email, password, from} = req.body.userData
        const test = req.body.test

        try{
            const usuarioExiste = await User.findOne({email})

            if(usuarioExiste){
                console.log(usuarioExiste.from.indexOf(from))
                if(usuarioExiste.from.indexOf(from) === 0){
                    console.log('resultado de if '+(usuarioExiste.from.indexOf(from) === 0))
                    res.json({
                        success: false,
                        from: 'signup',
                        message: 'Ya has realizado tu SignUp de esta forma, por favor realiza SignIn'
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
                            message: 'Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIn'
                        })
                    }else{
                        usuarioExiste.save()

                        res.json({
                            success: true,
                            from:'signup',
                            message: 'Agregamos '+from+' a tus medios para realizar signIn'
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
                        message: 'Felicitaciones se ha creado tu usuario con '+from
                    })// AGREGAMOS MENSAJE DE VERIFICACION
                }else{
                    // PASAR EMAIL VERIFICADO A FALSE
                    // ENVIARLE EL EMAIL PARA VERIFICAR
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario,uniqueString)// LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp'
                    })// AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        }catch(error){
            console.log(error);
            res.json({
                success: false,
                message: 'Algo a salido mal, intentalo en unos minutos'
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
                    message: 'Tu usuario no ha sido registrado, realiza signUp'
                })
            }else{
                if(from !== 'form-Signin'){
                    let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))

                    if(contraseñaCoincide.length > 0){
                        const userData = {
                            id: usuarioExiste._id,
                            firstName: usuarioExiste.firstName,
                            email : usuarioExiste.email,
                            from : usuarioExiste.from
                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60* 60*24})
                        
                        res.json({
                            success: true,
                            from: from,
                            response: {token, userData},
                            message: 'Bienvenido nuevamente '+userData.firstName,
                        })
                    }else{
                        res.json({
                            from: from,
                            message:'No has realizado el registro con '+from+' si quieres ingresar con este metodo debes hacer el signUp con '+from
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
                                email: usuarioExiste.email,
                                from: usuarioExiste.from
                            }
                            const token = jwt.sign({userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})

                            res.json({
                                success: true,
                                from: from,
                                response: {token, userData},
                                message: 'Bienvenido nuevamente '+userData.firstName,
                            })
                        }else{
                            res.json({
                                success:false,
                                from: from,
                                message: 'El usuarion o el password no coinciden',
                            })
                        }
                    }else{
                        res.json({
                            success: false,
                            from: from,
                            message: 'No has verificado tu email, por favor verifica tu casilla de emails para completar tu signUp'
                        })
                    }
                }// SI NO ESTA VERIFICADO
            }
        }catch(error){
            console.log(error);
            res.json({
                success:false,
                message: 'Algo a salido mal, intentalo en unos minutos'
            })
        }
    },
    signOutUser: async(req, res) => {
        const email = req.body.closeuser
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log('sesion cerrada '+email))
    },
}

module.exports = usersControllers