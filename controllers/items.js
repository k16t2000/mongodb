const date=require('../generateDate.js');

const Task=require('../models/task');

let toDoList=[];//dannie suda sohranat budem

exports.getMainPage=(req,res)=>{
    Task.fetchTasks(items=>{
        let day=date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });
    //let weekday=date.getDate();//zapustili
    /*let weekday=date.getWeekDay();
    console.log(day);*/
    //const itemsList=Task.fetchTasks();//s pomoshju metoda fetchtask proveraju est li v massive 4to to
    //res.render("index.ejs", {date: weekday, toDoItems: itemsList});//date, toDoItems iz ejs
};



//na server forma
exports.postNewItem=(req, res)=>{
    /*let newTask=req.body.newTask;//polu4aem 4to polzovatel vvedet
    toDoList.push(newTask);//dobavlaet v massiv element*/
    const item=new Task(req.body.newTask);//4to vvedet polu4im
    item.saveTask();//sohranaet
    res.redirect("/");//perenapravim na glavnuju str
};

exports.deleteItem=(req,res)=>{
    console.log("Call from delete", req.body.checkbox);//chackbox
    //vizivaem konrolleri
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');

}