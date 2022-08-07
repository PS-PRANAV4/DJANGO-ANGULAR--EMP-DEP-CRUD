import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList: any = [];


  ngOnInit(): void {
    this.refrestDepList();

  }
    refrestDepList()
    {
      this.service.getDepList().subscribe(data=>{
        this.DepartmentList=data;

      });
    }
  }


