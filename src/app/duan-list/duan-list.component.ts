import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IDuAn } from '../idu-an';
import { DulieuService } from '../dulieu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css'
})
export class DuanListComponent {
  
  list_du_an: any = [];
  constructor(private d:DulieuService){}
  ngOnInit(): void {
    this.fetchDuAnList();
  }
  
  fetchDuAnList(): void {
    this.d.LayDuAn().subscribe(
      data => {
        this.list_du_an = data;
      })
  }

  deleteProduct(id: number): void {
    this.d.xoaDuAn(id).subscribe(
      () => {
        this.fetchDuAnList(); // Cập nhật danh sách sau khi xóa
        alert('Xóa dự án thành công');
      },
      error => {
        console.error('Lỗi khi xóa dự án:', error);
      }
    );
  }

}
