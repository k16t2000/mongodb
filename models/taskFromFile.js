/*let toDoList=[];//massiv*/
const fs=require('fs');
const path=require('path');
const pathToRegularTaskFile=path.join(path.dirname(process.mainModule.filename), 'data', 'regularTask.json');



module.exports=class Task{
    constructor(task){
        this.description= task;
    }
    
    saveTask(){
       // toDoList.push(this);//sohranat i s4itivat-2 metoda
        
        fs.readFile(pathToRegularTaskFile, (error, fileContent)=>{//save
            let tasks=[];
            if(!error){
                tasks=JSON.parse(fileContent);//if ok
            }else{
                console.log(error);
            }
            tasks.push(this);//if ok, add to mass=>to ze
            //samoe item.saveTsk()
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks), (error)=>{//zapisivaem v fail
                console.log('Error', error);
            });
        });
    }
    
    static fetchTasks(callBack){
        //return toDoList;//vozvrashaet itemList
        fs.readFile(pathToRegularTaskFile, (error, fileContent)=>{
            if(error){
                callBack([]);//esli err,to sohr v pustoj massiv
            }
            callBack(JSON.parse(fileContent));
        });
        
    }
//udalaem slovo iz checkboxa
    static deleteItem(description){//description iz faila index
        fs.readFile(pathToRegularTaskFile, (error, fileContent)=>{
            let tasks=[];
            if(!error){
                tasks=JSON.parse(fileContent);
            }
            for(let i=0; i<tasks.length; i++){
                if(tasks[i].description===description){
                    console.log(tasks[i].description, "deleted");
                    tasks.splice(i,1);//udalaet na kakom ind, skolko elementov
                    break;
                }
            }
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks),(error)=>{
                console.log("Error while trying to delete", error);
            })
        });

    }
}