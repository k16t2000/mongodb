const mongoose=require('mongoose');
const Schema=mongoose.Schema;//Schema opisivaet kak vigladat objekti
const taskSchema2=new Schema({
    description:{
        type: String
    }
});
mongoose.model('Taskwork', taskSchema2); //objekti Task-rabotajut kak v taskSchema
