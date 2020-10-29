const express=require('express');
const router=express.Router();
//zaprosi prinimaet router,na lubuju 4ast prilozenija obrabativaet
router.get('*',(req,res)=>{
    res.status(404).render('404.ejs');
});

//router isp v dr
module.exports=router;