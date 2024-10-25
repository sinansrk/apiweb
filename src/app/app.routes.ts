
import { LoginComponent } from './page/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';

export const routes: Routes = [
{
  path:'',component: LoginComponent
},
{
  path:'home',component:HomeComponent
},


{
  path:'products/:id',component:ProductComponent
}

];
