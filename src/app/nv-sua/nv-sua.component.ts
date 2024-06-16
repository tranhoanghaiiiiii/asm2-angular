import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nv-sua',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nv-sua.component.html',
  styleUrl: './nv-sua.component.css'
})
export class NvSuaComponent {
  id:number=0;
  data:INhanVien = <INhanVien>{};// lấy toàn bộ thông tin của nhân viên
  constructor(private d:DulieuService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    
    this.d.Lay1NhanVien(this.id).subscribe (nv=>{
      console.log("nv=", nv)
      this.data = nv as INhanVien;

    })
  }
  xuly(){
    this.d.suaNhanVien(this.data).subscribe (result =>{
      console.log("result:",result);
      alert("Sửa thành công")
      this.router.navigate(['/nhan_vien'])
      
    })
  }
}
