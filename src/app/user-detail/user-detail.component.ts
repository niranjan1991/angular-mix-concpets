import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private employeeService : DataService) { }

  ngOnInit() {

    this.employeeService.getAllEmpolyee().subscribe(
      (res) =>{
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
