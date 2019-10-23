import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() { 
  this.dataService.getuser().subscribe(
      (resp) => {  console.log('userData', resp) },
      (error) => { error }, 
    ) 
  }

}
