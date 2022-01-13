const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../modules/signupmodules')
const bcrypt = require('bcrypt')

router.post('/signup', async(request,response)=>
{
    const saltPassword = await bcrypt.genSalt(10)
    const securePasword = await bcrypt.hash(request.body.password, saltPassword)
    const signedUpuser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
        
    })
    signedUpuser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router