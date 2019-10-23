import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module'; 
import { InterceptorService } from './interceptor.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserComponent,
    ParentComponent,
    ChildComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
