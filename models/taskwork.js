/*let toDoWorkList=[];//massiv*/
const fs=require('fs');
const path=require('path');
const pathToRegularWorkFile=path.join(path.dirname(process.mainModule.filename), 'data', 'regularWork.json');

module.exports=class Taskwork{
    constructor(task){
        this.description= task;
    }
    
    //sohranat i s4itivat-2 metoda
    saveTaskwork(){
        //toDoWorkList.push(this);
        fs.readFile(pathToRegularWorkFile, (error, fileContent)=>{//save
            let tasks=[];
            if(!error){
                tasks=JSON.parse(fileContent);//if ok
            }else{
                console.log(error);
            }
            tasks.push(this);//if ok, add to mass=>to ze
            //samoe item.saveTsk()
            fs.writeFile(pathToRegularWorkFile, JSON.stringify(tasks), (error)=>{//zapisivaem v fail
                console.log('Error', error);
            });
        });
    }

    static fetchTaskswork(callBack){
       // return toDoWorkList;
       fs.readFile(pathToRegularWorkFile, (error, fileContent)=>{
        if(error){
            callBack([]);//esli err,to sohr v pustoj massiv
        }
        callBack(JSON.parse(fileContent));
    });
    }

    static deleteWorkItem(description){//description iz faila index
        fs.readFile(pathToRegularWorkFile, (error, fileContent)=>{
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
            fs.writeFile(pathToRegularWorkFile, JSON.stringify(tasks),(error)=>{
                console.log("Error while trying to delete", error);
            })
        });

    }



}