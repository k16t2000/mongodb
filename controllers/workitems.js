const date=require('../generateDate.js');
const mongoose=require('mongoose');
//const Taskwork=require('../models/taskwork');
//let toDoWorkList=[];//dannie suda sohranat budem

const Taskwork=mongoose.model('Taskwork');

exports.getWorkPage=(req,res)=>{
    let day=date.getDate();
    Taskwork.find((error, taskworks)=>{
        if(!error){
            res.render("work.ejs", {date: day, toDoWorkItems: taskworks});
        }else{
            console.log("Failed to retireve data: ",error);
        }
    });     
};
exports.postNewWorkItem=(req, res)=>{
    const item=req.body.newTaskwork;//4to vvedet polu4im
    let newTaskwork=new Taskwork;
    newTaskwork.description=item;
    newTaskwork.save((error, response)=>{
        if(!error){
            res.redirect('/work');
        }else{
            console.log(error);
        }
    });
};

exports.deleteWorkItem=(req,res)=>{
    console.log("Call from workpage delete", req.body.checkboxwork);//checkbox
    const checkedWorkItemId=req.body.checkboxwork;
    Taskwork.findByIdAndRemove(checkedWorkItemId, function(error){
        if(!error){
            console.log("Successfully deleted the item!");
            res.redirect('/work');
        }else{
            console.log(error);
        }
    });

    
 }
