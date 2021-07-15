const express = require('express');
const sendMail = require('./mail');
const app = express();
const bodyparser = require("body-parser");
const path = require('path');
const port = process.env.PORT || 8080;
// for giving access to our static folder
app.use("/static", express.static("static"));


//for data parsing
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.post('/email',(req,res)=> {
    //sending email here
    const {subject, email, text} = req.body;
    console.log(req.body);

    sendMail(email, subject, text, function(err,data){
        if(err){
            res.status(500).json({message:"internal error inside appjs post"});
        }
        else{
            res.json({message:"your email sent"});
        }
    });
});


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.listen(port,()=> {
    console.log(`my app is running on port at ${port}`);
});