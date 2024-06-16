import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { DulieuService } from './dulieu.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asm1';
  employeeCount: any;
  countTk:any;
  countda:any;
  constructor(private auth:DulieuService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth.countNV().subscribe(
      data => {
        this.employeeCount = data.total;
      },
      error => {
        console.error('Lỗi khi lấy số lượng nhân viên:', error);
      }
    );
    this.auth.countTask().subscribe(
      data => {
        this.countTk = data.total;
      },
      error => {
        console.error('Lỗi khi lấy số lượng nhân viên:', error);
      }
    );
    this.auth.countDA().subscribe(
      data => {
        this.countda = data.total;
      },
      error => {
        console.error('Lỗi khi lấy số lượng nhân viên:', error);
      }
    );
  }
  thoat(){ this.auth.thoat();  }
  // daDangNhap() { return this.auth.daDangNhap()}
  getStatus(): string {
    return this.auth.daDangNhap() ? 'thành viên' : 'khách';
  }
  // count_nv:any
  // countNV():void{
  //   this.auth.countNV().subscribe(
  //     data =>{
  //       this.count_nv = data;
  //     }
  //   )
  // }
}
