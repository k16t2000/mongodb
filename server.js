const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const mainPage=require('./routes/main');
const getError=require('./routes/404');//routes dobavili
const callabout=require('./routes/about');//about
const workPage=require('./routes/work');

const app=express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));//podklu4ila css

app.use(mainPage);
app.use(workPage);
app.use(callabout);//call about page
//routes call
app.use(getError);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});