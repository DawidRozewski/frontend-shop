import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layoutd/default/default.component';
import { FullpageComponent } from './layoutd/fullpage/fullpage.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children:[
      {path:'', component: HomeComponent},
      {path:'products', component: ProductComponent}
    ]
  },
  {
    path:'', component: FullpageComponent, children:[
      {path:'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
