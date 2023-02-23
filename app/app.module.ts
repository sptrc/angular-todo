import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,AddTaskComponent,TasksComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
