import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from "@angular/router";

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';


import { NotpagefoundComponent } from './notpagefound/notpagefound.component';


const routes: Routes = [
  
 //path: '/dashboard' PagesRouting
//path: '/dashboard' PagesRouting
{path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'**', component: NotpagefoundComponent }
  
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
