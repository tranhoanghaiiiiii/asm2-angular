import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { IDuAn } from './idu-an';
import { INhanVien } from './inhan-vien';
import { ITask } from './itask';
import { IUser } from './iuser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import moment from 'moment';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DulieuService {
  // private apiUrl = 'http://localhost:3000/count_nhan_vien';

  constructor(private h:HttpClient,@Inject(DOCUMENT)  private document: Document) { }
  LayDuAn(){
    return this.h.get('http://localhost:3000/du_an');
  }
  countDA(): Observable<any> {
    return this.h.get<any>('http://localhost:3000/count_da');
  }
  Lay1DuAn(id:number=0){
    return this.h.get(`http://localhost:3000/du_an/${id}`);
  }
  themDuAn(da:IDuAn){
    return this.h.post('http://localhost:3000/du_an',da);
  }
  xoaDuAn(id:number=0){
    return this.h.delete('http://localhost:3000/du_an/' + id)
  }
  suaDuAn(da:IDuAn){
    return this.h.put('http://localhost:3000/du_an/'+ da.id , da)

  }
  //nhân viên
  LayNhanVien(){
    return this.h.get('http://localhost:3000/nhan_vien');
  }
  countNV(): Observable<any> {
    return this.h.get<any>('http://localhost:3000/count_nhan_vien');
  }
  Lay1NhanVien(id:number=0){
    return this.h.get(`http://localhost:3000/nhan_vien/${id}`);
  }
  themNhanVien(nv:INhanVien){
    return this.h.post('http://localhost:3000/nhan_vien',nv);
  }
  xoaNhanVien(id:number=0){
    return this.h.delete('http://localhost:3000/nhan_vien/' + id)
  }
  suaNhanVien(nv:INhanVien){
    return this.h.put('http://localhost:3000/nhan_vien/'+ nv.id , nv)

  }

  //task
  LayTask(){
    return this.h.get('http://localhost:3000/task');
  }
  countTask(): Observable<any> {
    return this.h.get<any>('http://localhost:3000/count_task');
  }
  Lay1Task(id:number=0){
    return this.h.get(`http://localhost:3000/task/${id}`);
  }
  themTask(ta:ITask){
    return this.h.post('http://localhost:3000/task',ta);
  }
  xoaTask(id:number=0){
    return this.h.delete('http://localhost:3000/task/' + id)
  }
  suaTask(ta:ITask){
    return this.h.put('http://localhost:3000/task/'+ ta.id , ta)

  }
  //login
  layUser(){
    return this.h.get('http://localhost:3000/users')
  }
  themUser(us:IUser){
    return this.h.post('http://localhost:3000/users',us)
  }
  login(username:string='', password:string=''){    
    const userInfo = { un:username, pw:password }
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
    return this.h.post('http://localhost:3000/login'
    , JSON.stringify(userInfo) 
    , {headers:headers, responseType: 'text'}
  ) 
  }//login
  daDangNhap() {
    let localStorage = this.document.defaultView?.localStorage
     if (!localStorage) return false;
     const str = localStorage.getItem("expires_at") || "";
     if (str=="") return false; //chưa dn    
     const expiresAt = JSON.parse(str);    
     return moment().isBefore(moment(expiresAt));
   } //daDangNha
  thoat() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
}
}
