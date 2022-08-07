import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }
  DepartmentList:any = [];
  ModalTitle:string = '';
  depa:any;
  ActivateAddEditDepComp:boolean=false;
  ngOnInit(): void {
    this.refrestDepList();
  }
  addClick()
  {
    this.depa={
      id:0,
      department_name:""
    }
    this.ModalTitle= "Add department";
    this.ActivateAddEditDepComp = true;
  }
  closeClick()
  {
    this.ActivateAddEditDepComp = false;
    this.refrestDepList();
  }
  editClick(datas:any)
  {
    this.depa=datas;
    this.ModalTitle="Edit Department"
    this.ActivateAddEditDepComp = true;
  }
  refrestDepList()
  {
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;

    });
  }
  deletdepartment(id:any)
  {
    var val = id
    this.service.deleteDepList(val).subscribe(res=>{
      alert(res.toString());
      this.refrestDepList();
    });
    
  } 
}
