import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  event(add){
    console.log('scsc');
    this.newItemEvent.emit(add.value);
  }
}