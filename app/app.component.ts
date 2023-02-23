import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular 5';
  tasks=[
    {id:1,task:'task1',done:false},
    {id:2,task:'task2',done:false},
    {id:3,task:'task3',done:false},
    {id:4,task:'task4',done:false}
  ];
  updated=[];


  ngOnInit(){
    if(!localStorage.getItem('tasks'))
   localStorage.setItem('tasks',JSON.stringify(this.tasks)) 
   this.updated=JSON.parse(localStorage.getItem('tasks'))
  }
  
  addTask(task){
    console.log(task)
    let obj={id:this.tasks.length+1,task:task,done:false};
    this.tasks.push(obj);
    localStorage.setItem('tasks',JSON.stringify(this.tasks)) ;
    this.updated=JSON.parse(localStorage.getItem('tasks'))
    task=''
  }

  complete(task){
    this.updated=JSON.parse(localStorage.getItem('tasks'))
    let obj :any= this.updated.findIndex(e=>e.id===task);
    this.updated[obj].done=!this.updated[obj].done;
    localStorage.setItem('tasks',JSON.stringify(this.updated)) ;
  }
  del(task){
    this.updated=JSON.parse(localStorage.getItem('tasks'))
    let obj :any= this.updated.findIndex(e=>e.id===task);
    this.updated.splice(obj,1)
    localStorage.setItem('tasks',JSON.stringify(this.updated)) ;
  }


}
