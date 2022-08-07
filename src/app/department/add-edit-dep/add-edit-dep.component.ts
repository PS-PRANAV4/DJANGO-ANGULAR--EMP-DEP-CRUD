import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { 
    this.departmentId = ''
    this.departmentName = ''
  }
  @Input() depa:any;
  departmentId:string;
  departmentName:string;


  addDepartment()
  {
    var val = { 
      department_name:this.departmentName
    }
    this.service.addDepList(val).subscribe(res=>{
     alert(res.toString()); 
    });
    }
  updatedepartment()
  {
    var val = { department_id:this.departmentId,
      department_name:this.departmentName
    }
    this.service.updateDepList(val).subscribe(res=>{
     alert(res.toString()); 
    });
  }
  
  ngOnInit(): void {
    this.departmentId = this.depa.id;
    this.departmentName = this.depa.department_name;
  }

}


