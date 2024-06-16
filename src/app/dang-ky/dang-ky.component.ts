import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../iuser';
import { DulieuService } from '../dulieu.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dang-ky',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './dang-ky.component.html',
  styleUrl: './dang-ky.component.css'
})
export class DangKyComponent {
  listUser:IUser[]=[];
  constructor(private d:DulieuService,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.d.layUser().subscribe(data=>{
      this.listUser = data as IUser[];
    })
  }
xuly(us:IUser){
  this.d.themUser(us).subscribe(data=>{
    alert('Đăng ký thành viên thành công')
    this.router.navigate(['/login'])
  })
}
}
