import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDuAn } from '../idu-an';
import { INhanVien } from '../inhan-vien';
import { ITask } from '../itask';
import { DulieuService } from '../dulieu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-sua',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-sua.component.html',
  styleUrl: './task-sua.component.css'
})
export class TaskSuaComponent {
  id:number=0;
  data:ITask=<ITask>{};
  listNhanVien:INhanVien[]=[];
  listDuAn:IDuAn[]=[]
  constructor(private d:DulieuService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.d.LayDuAn().subscribe(data=>{
      this.listDuAn=data as IDuAn[]
    })
    this.d.LayNhanVien().subscribe(nv=>{
      this.listNhanVien=nv as INhanVien[]
    })
    this.d.Lay1Task(this.id).subscribe(tk=>{
      this.data=tk as ITask;
    })

  }
  xuly(){
    this.d.suaTask(this.data).subscribe(result=>{
      console.log("result",result)
      alert('sửa thành công');
      this.router.navigate(['/task']);
    })
  }
}
