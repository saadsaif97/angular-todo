import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      id: 1,
      text: 'Learn Angular',
      completed: true,
      date: new Date('2021 07 07').toDateString()
    },
    {
      id: 2,
      text: 'Learn Angular and Medium Level',
      completed: false,
      date: new Date('2021 07 08').toDateString()
    },
    {
      id: 3,
      text: 'Learn Angular and Advanced Level',
      completed: false,
      date: new Date('2021 07 09').toDateString()
    },
    {
      id: 4,
      text: 'Practice Practice Practice Angular',
      completed: false,
      date: new Date('2021 07 10').toDateString()
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(id: number): void{
    this.tasks.map(task => task.id == id ? task.completed = !task.completed : task.completed)
  }

  deleteTask(id: number): void{
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
