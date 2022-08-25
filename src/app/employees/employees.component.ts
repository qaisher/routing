import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() {
    console.log('employees component loaded');
   }

  public employees = [
    {"id": 124, "name": "Charlie", age:23},
    {"id": 251, "name": "Bravo", age:25},
    {"id": 764, "name": "Alpha", age:31},
    {"id": 982, "name": "Zulu", age:22}
  ]

  ngOnInit(): void {
  }

}
