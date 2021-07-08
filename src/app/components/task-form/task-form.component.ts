import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() addNewTask: EventEmitter<any> = new EventEmitter()

  form: Task = {
    text : '',
    completed : false,
    date : new Date('2021 07 07').toDateString(),
  }

  constructor() { }

  ngOnInit(): void {
  }

  createNewTask(): void{
    if (!this.form.text) {
      return alert('Text is required')
    }

    this.addNewTask.emit(this.form)

    this.form.text = ''
    this.form.completed = false
  }

}
