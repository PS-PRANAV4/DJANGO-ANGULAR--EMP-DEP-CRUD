import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  @Input() emp:any ;
  employee_name :string ='';
  employee_departmen:string ='';
  date_of_joining:string='';
  

  constructor(private service:SharedService) { }
  addEmp()
  {
    var val = { 
      employee_name:this.employee_name,
      employee_departmen:this.employee_departmen,
      date_of_joining:this.date_of_joining
    }
    this.service.addEmpList(val).subscribe(res=>{
     alert(res.toString()); 
    });
  }
  updateemp()
  {
    var val = { 
      id:this.emp.id,
      employee_name:this.employee_name,
      employee_departmen:this.employee_departmen,
      date_of_joining:this.date_of_joining
    }
    this.service.updateEmpList(val).subscribe(res=>{
     alert(res.toString()); 
    });
  }
  ngOnInit(): void {
    this.employee_name =this.emp.employee_name;
    this.employee_departmen = this.emp.employee_departmen;
    this.date_of_joining = this.emp.date_of_joining;
  }

}
