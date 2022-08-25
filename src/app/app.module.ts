import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { OverviewComponent } from './overview/overview.component';
import { TestModuleModule } from './test-module/test-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentComponentComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //TestModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
