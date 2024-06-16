import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INhanVien } from '../inhan-vien';
import { RouterLink } from '@angular/router';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  list_nhan_vien:any=[];
  constructor(private nv:DulieuService){}
  ngOnInit():void{
    
    this.fetchNhanVienList()
  }
  fetchNhanVienList(): void {
    this.nv.LayNhanVien().subscribe(
      data => {
        this.list_nhan_vien = data;
      })
  }
  deleteNV(id: number): void {
    this.nv.xoaNhanVien(id).subscribe(
      () => {
        this.fetchNhanVienList(); // Cập nhật danh sách sau khi xóa
        alert('Xóa dự án thành công');
      },
      error => {
        console.error('Lỗi khi xóa dự án:', error);
      }
    );
    console.log(id)
  }
}
