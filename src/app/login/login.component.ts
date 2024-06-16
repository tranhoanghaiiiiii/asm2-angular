import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../iuser';
import { DulieuService } from '../dulieu.service';
import { Router, RouterLink } from '@angular/router';

import moment  from 'moment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( 
    private auth:DulieuService, 
    private router: Router
  ) { }
  xulyDN(data:any){    
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", 
               JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('oops', error);
        this.router.navigateByUrl('/dangnhap');
      }
    )
   } //xulyDN
}
