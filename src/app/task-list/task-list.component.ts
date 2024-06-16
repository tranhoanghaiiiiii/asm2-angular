import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { RouterLink } from '@angular/router';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  list_task:any=[];
  constructor(private d:DulieuService){}
  ngOnInit():void{
    // fetch(`http://localhost:3000/task`)
    // .then (res => res.json())
    // .then (data =>{
    //   this.list_task = data;
    // })
    this.listTask();

  }
  listTask(){
    this.d.LayTask().subscribe(
      data=>{
        this.list_task =data;
      }
    )
  }
  deleteTask(id:number){
    this.d.xoaTask(id).subscribe(()=>{
      this.listTask();
      alert('Xoa Dự án thành công')
    })
  }
}
