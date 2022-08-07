import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId : any;

  
  constructor(private route: ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = Number(param.get('id'));
      this.departmentId = id;
    })
  }


  previousDepartment(){
    let id: number = this.departmentId;
    this.router.navigate(['/department', id-1]);
  }

  nextDepartment(){
    let id : number = this.departmentId;
    this.router.navigate(['/department', id+1]);
  }
}
