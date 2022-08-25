import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTest2RoutingModule } from './lazy-test2-routing.module';
import { LazyTest2Component } from './lazy-test2.component';
import { LazycompComponent } from './lazycomp/lazycomp.component';


@NgModule({
  declarations: [
    LazyTest2Component,
    LazycompComponent
  ],
  imports: [
    CommonModule,
    LazyTest2RoutingModule
  ]
})
export class LazyTest2Module { }
