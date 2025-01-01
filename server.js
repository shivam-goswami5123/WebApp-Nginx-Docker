const express=require('express');
const path=require('path');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    console.log(`Request received by ${process.env.APP_NAME}`);
});


app.listen(port,()=>{
    console.log(`${process.env.APP_NAME} listening on port ${port}`);
});

