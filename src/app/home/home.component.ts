import { Component } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list_du_an: any = [];
  constructor(private d:DulieuService){}
  ngOnInit(): void {
    this.fetchDuAnList();
    this.listTask();
    this.listNV();
    // this.countNV();
  }
  
  fetchDuAnList(): void {
    this.d.LayDuAn().subscribe(
      data => {
        this.list_du_an = data;
      })
  }
  list_task:any=[];
  
  listTask(): void {
    this.d.LayTask().subscribe(
      data => {
        this.list_task = data;
      })
  }
  list_nv:any=[]
  listNV():void{
    this.d.LayNhanVien().subscribe(
      data=>{
        this.list_nv = data;
      }
    )
  }
  
}
