const date=require('../generateDate.js');
const Taskwork=require('../models/taskwork');

let toDoWorkList=[];//dannie suda sohranat budem

exports.getWorkPage=(req,res)=>{
    Taskwork.fetchTaskswork(items=>{
        let day=date.getDate();
        res.render("work.ejs", {date: day, toDoWorkItems: items});
    });
    //let weekday=date.getDate();//zapustili
    /*let weekday=date.getWeekDay();
    console.log(day);*/
    //const itemsList=Taskwork.fetchTasks();//s pomoshju metoda fetchtask proveraju est li v massive 4to to
    //res.render("work.ejs", {date: weekday, toDoWorkItems: toDoWorkList});//date, toDoItems iz ejs
};



//na server forma
exports.postNewWorkItem=(req, res)=>{
    /*let newTask=req.body.newTask;//polu4aem 4to polzovatel vvedet
    toDoWorkList.push(newTask);//dobavlaet v massiv element*/
    const item=new Taskwork(req.body.newTaskwork);//4to vvedet polu4im
    item.saveTaskwork();//sohranaet
    res.redirect("/work");//perenapravim na glavnuju str
};

exports.deleteWorkItem=(req,res)=>{
    console.log("Call from workpage delete", req.body.checkboxwork);//checkbox
    //vizivaem konrolleri
    Taskwork.deleteWorkItem(req.body.checkboxwork);
    res.redirect('/work');

}