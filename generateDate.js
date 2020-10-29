//anonimnaja funkzija
exports.getDate=function(){
    let today=new Date();
    //zadaem format dlja objekta
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day=today.toLocaleDateString("en-Us", options);//peredaju dannie sjuda spomoshju objekta options
    return day;
}

exports.getWeekDay=function(){
    let today=new Date();
    //zadaem format dlja objekta
    let options={
        weekday: "long",
    }
    let day=today.toLocaleDateString("en-Us", options);//peredaju dannie sjuda spomoshju objekta options
    return day;
}