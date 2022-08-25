import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute) {
    console.log('department component loaded');
   }
  public department = [
    {"id":1, "department": "MHA"},
    {"id":2, "department": "MoD"},
    {"id":3, "department": "MoF"}
  ]

  public idToHighlight: any;
  onSelect(department: any){
    this.router.navigate(['/department', department.id]);
    //this.router.navigate([department.id], {relativeTo: this.route});
  }
  ngOnInit(): void {
    //let idToHighlight = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idToHighlight = params.get('id');
    })
  }

  selected(department: any){
    return this.idToHighlight == department.id;
  }

}
