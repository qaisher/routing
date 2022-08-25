import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyTest2Component } from './lazy-test2.component';
import { LazycompComponent } from './lazycomp/lazycomp.component';

const routes: Routes = [{ path: '', component: LazyTest2Component },
{ path: 'lazycomp', component: LazycompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTest2RoutingModule { }
