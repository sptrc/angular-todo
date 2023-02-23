import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {

  @Input() tasks:any;
  @Output() doneEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  done(arg){
    this.doneEvent.emit(arg)
  }
  delete(arg){
    // console.log(arg)
    this.deleteEvent.emit(arg)
  }
}
