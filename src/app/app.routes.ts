import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { baoveGuard } from './baove.guard';
import { DangKyComponent } from './dang-ky/dang-ky.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'trang chủ'},
    {path:'du_an', component:DuanListComponent, title:'Danh sách dự án', 
        canActivate:[baoveGuard]},
    {path:'du_an/them', component:DuanThemComponent, title:'Them dự án', 
        canActivate:[baoveGuard]},
    {path:'du_an/sua/:id', component:DuanSuaComponent, title:'sửa dự án', 
        canActivate:[baoveGuard]},
    {path:'nhan_vien', component: NvListComponent, title:'danh sách nhân viên', 
        canActivate:[baoveGuard]},
    {path:'nhan_vien/them', component:NvThemComponent, title:'Thêm nhân viên', 
        canActivate:[baoveGuard]},
    {path:'nhan_vien/sua/:id', component:NvSuaComponent, title:'sửa nhân viên', 
        canActivate:[baoveGuard]},
    {path:'task', component: TaskListComponent, title:'danh sách task', 
        canActivate:[baoveGuard]},
    {path:'task/them', component:TaskThemComponent, title:'Thêm task', 
        canActivate:[baoveGuard]},
    {path:'task/sua/:id', component:TaskSuaComponent, title:'sửa task', 
        canActivate:[baoveGuard]},
    {path:'login',component:LoginComponent},
    {path:'dang_ky',component:DangKyComponent},
    {path:'**', component: NotFoundComponent, title:'Không tìm thấy'}
];
