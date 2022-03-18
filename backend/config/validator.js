const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The NAME must contain more than 3 characters',
            'string.max':'The name must contain a maximum of 20 characters'
        }),

        lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The LAST NAME must contain more than 3 characters',
            'string.max':'The last name must contain a maximum of 20 characters'
        }),

        email: joi.string().email({ minDomainSegments: 2}).required().messages({
            'string.email':'Wrong email format'
        }),
        
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'The password must contain at least 8 characters and contain uppercase, lowercase and number',
            'string.pattern':'The password must be alphanumeric and contain a number'
        }),

        userPhoto: joi.string().trim().required(),

        country: joi.string().trim().required(),

        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})

    if(validation.error){
        return res.json({success: false, from:'validator', message:validation.error.details})
    }

    next()
}

module.exports = validator