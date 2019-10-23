import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component'; 
import { AuthGuard } from './auth.guard';  

const routes : Routes = [
  //{ path : '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: UserRegistrationComponent },
  { path : 'user', component : UserComponent, canActivate : [AuthGuard]  },
  {   path : 'userdetail', 
      loadChildren : './user-detail/use-detail-module.module#UseDetailModuleModule', 
      canActivate : [AuthGuard] 
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports : []
})
export class AppRoutingModule { }
