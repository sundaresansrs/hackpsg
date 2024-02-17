const express = require('express');
const app = express();

app.use((req,res,next)=>{
    res.status(200).json({
        message:"Hello,the server is running."
    })
})

module.exports = app

