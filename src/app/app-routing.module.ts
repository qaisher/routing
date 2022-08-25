import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { LazyTestComponent } from './lazy-test/lazy-test.component';
import { LazycompComponent } from './lazy-test2/lazycomp/lazycomp.component';
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
  {path: "test", loadChildren: () => import('./test-module/test-module.module').then(mod => mod.TestModuleModule)},
  {path: "lazy-test", loadChildren: () => import('./lazy-test/lazy-test.module').then(mod => mod.LazyTestModule)},
  { path: 'lazy-test2', loadChildren: () => import('./lazy-test2/lazy-test2.module').then(m => m.LazyTest2Module) },
  //{path: "lazy-test", component: LazyTestComponent},
  {path: "lazycomp", component: LazycompComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
