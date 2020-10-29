const { render } = require('ejs');
const express=require('express');
const router=express.Router();

//zaprosi prinimaet router,na lubuju 4ast prilozenija obrabativaet
router.get('/about',(req,res)=>{
    res.render('about.ejs'); 
});

//router isp v dr
module.exports=router;