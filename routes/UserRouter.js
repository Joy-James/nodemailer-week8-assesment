const sendMail =require('../utils/sendMail')
const userRouter=require('express').Router()

userRouter.get('/', (req, res) =>{
    res.send ("Week eight Assesment on nodemailer")
})


userRouter.post ('/sendmail', (req, res) =>{
    sendMail()
    res.send("I have sent you an Email, please confirm")
})

module.exports=userRouter;