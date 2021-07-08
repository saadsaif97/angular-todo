import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../interfaces/Task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() completeTask: EventEmitter<any>  = new EventEmitter()
  @Output() deleteTask: EventEmitter<any>  = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
  }

  emitCompleteTask(task: Task): void{
    this.completeTask.emit(task.id)
  }

  emitDeleteTask(task: Task): void{
    this.deleteTask.emit(task.id)
  }

}
