const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
console.log('inside mail')

const auth = {
    auth: {
        api_key:'5f8933494b3be26d84da95ada926fa59-1f1bd6a9-9f8f9f1c',
        domain:'sandboxe502a51b23804f42b4e07d0f7b8b9447.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail =(email, subject, text, cb)=>{
    const mailOptions = {
        from: email,
        to:'abdullah.sid786@gmail.com',
        subject,
        text
    };
    console.log('inside sendmail');
    
    transporter.sendMail(mailOptions, function(err, data){

        if (err){
           cb(err, null);
        
        }
        else{
           cb(null, data);
        }
    });
}


module.exports = sendMail;