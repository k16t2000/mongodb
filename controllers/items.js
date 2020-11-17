const date=require('../generateDate.js');
const mongoose=require('mongoose');
//const Task=require('../models/taskFromFile');

//let toDoList=[];//dannie suda sohranat budem
const Task=mongoose.model('Task');

exports.getMainPage=(req,res)=>{
        let day=date.getDate();
        Task.find((error,tasks) => {
            if(!error){
                res.render("index.ejs", {date: day, toDoItems: tasks});
            }else{
                console.log("Failed to retireve data: ",error);
            }
        });     
};

exports.postNewItem=(req, res)=>{
    const item=req.body.newTask;//4to vvedet polu4im
    let newTask=new Task();
    newTask.description=item;
    //sohranaem v db
    newTask.save((error,response)=>{
        if(!error){
            res.redirect('/');
        }else{
            console.log(error);
        }
    });
};

//udalenie iz db
exports.deleteItem=(req,res)=>{
    console.log("Call from delete", req.body.checkbox);//checkbox
    const checkedItemId=req.body.checkbox;
    Task.findByIdAndRemove(checkedItemId, function(error){
        if(!error){
            console.log("Successfully deleted the item!");
            res.redirect('/');
        }else{
            console.log(error);
        }
    });
   
}
/*exports.getMainPage=(req,res)=>{
    Task.fetchTasks(items=>{
        let day=date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    //});
    //let weekday=date.getDate();//zapustili
    /*let weekday=date.getWeekDay();
    console.log(day);*/
    //const itemsList=Task.fetchTasks();//s pomoshju metoda fetchtask proveraju est li v massive 4to to
    //res.render("index.ejs", {date: weekday, toDoItems: itemsList});//date, toDoItems iz ejs
//};



//na server forma
/*exports.postNewItem=(req, res)=>{
    /*let newTask=req.body.newTask;//polu4aem 4to polzovatel vvedet
    toDoList.push(newTask);//dobavlaet v massiv element*/
    /*const item=new Task(req.body.newTask);//4to vvedet polu4im
    item.saveTask();//sohranaet
    res.redirect("/");//perenapravim na glavnuju str
};

exports.deleteItem=(req,res)=>{
    console.log("Call from delete", req.body.checkbox);//chackbox
    //vizivaem konrolleri
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');

}*/