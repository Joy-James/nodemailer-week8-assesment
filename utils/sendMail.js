const nodemailer =require("nodemailer")
require("dotenv").config()
const email_config =require ("../config/emailConfig")

const message_options={
    to:['jonathan.mwaniki@thejitu.com'],
    from: process.env.EMAIL_USER,
    subject:'WEEK 8 ASSESMENT REPORT',
    html: '<p>Dear recipient,</p><p>Please find attached the weekly report.</p>',
    attachments: [
      {
        filename: 'Week8 Report.docx',
        content: 'reportFileContent',
        path:'https://thhllc-my.sharepoint.com/:w:/g/personal/joy_njuguna_thejitu_com1/EfrCHftnI3VCvII5qbf6krkBl02bCsUOobTtFitBb5kzHA'
      }]
    
}
const transporter = nodemailer.createTransport(email_config)

async function sendMail(){
    console.log(email_config)
    try {
       let results=await transporter.sendMail(message_options)
       console.log(results)
    } catch (error) {
        console.log(error)
    }
}

module.exports= sendMail;