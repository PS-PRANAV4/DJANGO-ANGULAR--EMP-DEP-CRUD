import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  id:any;
  ActivateAddEditDepComp:boolean = false;
  ModalTitle:string = '';
  eployeeList:any = [];
  emp:any;
  constructor(private service:SharedService) { }
  addClick()
  {
    this.ActivateAddEditDepComp =true;
    this.ModalTitle = 'ADD Employe';
    this.emp={
      id:0,
      employee_name:"",
      employee_departmen:'',
      date_of_joining:''
    }
  }
  closeClick()
  {
    this.ActivateAddEditDepComp = false;
    this.ModalTitle = '';
    this.refrestDepList();
  }
  refrestDepList()
    {
      this.service.getEmplist().subscribe(data=>{
        this.eployeeList=data;

      });
    }
    editClick(datas:any)
    {
      this.ActivateAddEditDepComp =true;
    this.ModalTitle = 'Edit Employe';
    this.emp={
      id:datas.id,
      employee_name:datas.employee_name,
      employee_departmen:datas.employee_departmen,
      date_of_joining:datas.date_of_joining
    }
    }
    deleteEmp(datas:any)
    {
      
      this.service.deleteEmpList(datas).subscribe(data=>{
        alert(data.toString()); 
        this.refrestDepList();
        
      })
    }
  ngOnInit(): void {
    this.refrestDepList();
  }

}
