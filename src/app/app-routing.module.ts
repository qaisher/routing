import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:DepartmentComponent},
  {
    path: 'department/:id',
    component: DepartmentDetailComponent, 
    children: [
      {path: 'contact', component: DepartmentComponentComponent},
      {path: 'overview', component: OverviewComponent}              
    ]
  },
  {path: "department", component: DepartmentComponent},
  {path: "employees", component: EmployeesComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
