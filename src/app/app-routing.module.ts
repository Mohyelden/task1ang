import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'portofolio',component:PortofolioComponent,title:'portofolio'},
  {path:'contact',component:ContactComponent,title:'contact'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
