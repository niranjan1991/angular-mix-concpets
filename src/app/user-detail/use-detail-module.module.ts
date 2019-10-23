import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router'; 
import { UserDetailComponent } from './user-detail.component';

const routes : Routes = [
  {path : '', component : UserDetailComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ 
    UserDetailComponent
  ]
})
export class UseDetailModuleModule { }
