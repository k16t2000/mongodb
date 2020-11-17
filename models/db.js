//v nmp---) npm i mongoose //dobavlaem paket dlja raboti s db
const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://jekaterinats:1596321kt@cluster0.nf8cq.mongodb.net/toDoListDB', { useNewUrlParser:true, useUnifiedTopology:true });
//mongoose.connect('mongodb://localhost:27017/toDoListDB', { useNewUrlParser:true, useUnifiedTopology:true });
require('./task');//beret modul, 4tobi pokavat, otpravit, pro4itat
//soedinaem s task
