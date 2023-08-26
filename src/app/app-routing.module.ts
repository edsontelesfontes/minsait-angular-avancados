import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'employees', loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent) },
  { path: 'employees/create', loadChildren: () => import('./employee-create/employee-create.module').then(m => m.EmployeeCreateModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: "**", redirectTo: "not-found"},
  { path: 'not-found', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
