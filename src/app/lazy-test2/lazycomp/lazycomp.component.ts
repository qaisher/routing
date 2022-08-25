import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazycomp',
  templateUrl: './lazycomp.component.html',
  styleUrls: ['./lazycomp.component.css']
})
export class LazycompComponent implements OnInit {

  constructor() { 
    console.log('lazycomp loaded');
  }

  ngOnInit(): void {
  }

}
