import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service'; 
import { AuthLoginService } from '../auth-login.service';
import { Router } from '@angular/router'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm : FormGroup
  submitted = false;
  constructor(
                private router: Router, private formBuilder: FormBuilder, 
                private dataService: DataService, private LoginService: AuthLoginService
            ) {}

  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      firstName : ['', Validators.required ],
      lastName : ['', Validators.required ],
      email : ['', [Validators.required, Validators.email] ],
      contact : ['', [Validators.required, Validators.minLength(10)] ],
      password : ['', [Validators.required, Validators.minLength(5)]]
    })

  };

  get formControls(){ return this.userForm.controls };

  onSubmit(){
    this.submitted = true; 
    if(this.userForm.invalid){
        return
    }else{ 
      console.log(this.userForm.value);
      this.dataService.sendUser(this.userForm.value); 
      this.LoginService.setLoggedIn(true);
      this.router.navigate(['/user']);
    }
  }

}
