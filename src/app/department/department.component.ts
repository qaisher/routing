import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router : Router) { }
  public department = [
    {"id":1, "department": "MHA"},
    {"id":2, "department": "MoD"},
    {"id":3, "department": "MoF"}
  ]

  onSelect(department: any){
    this.router.navigate(['/department', department.id])
  }
  ngOnInit(): void {
  }

}
