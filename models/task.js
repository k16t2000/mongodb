const mongoose=require('mongoose');
const Schema=mongoose.Schema;//Schema opisivaet kak vigladat objekti
const taskSchema=new Schema({
    description:{
        type: String
    }
});
mongoose.model('Task', taskSchema); //objekti Task-rabotajut kak v taskSchema
