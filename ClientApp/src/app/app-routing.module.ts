import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page.component';


const routes: Routes = [
  { path: 'user', component: UserPageComponent },
]

@NgModule({
  imports: [
    //RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
