import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProductdetailsComponent } from './views/productdetails/productdetails.component';
import { CheckOutComponent } from './views/check-out/check-out.component';
import { CartComponent } from './views/cart/cart.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductsComponent } from './views/products/products.component';
import { BrandssComponent } from './views/brandss/brandss.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllordersComponent } from './views/allorders/allorders.component';

const routes: Routes = [
  {path: '' , redirectTo:'login' , pathMatch:"full"},
  {path:'home' , canActivate:[AuthGuard],component:HomeComponent , title:"HOME"},
  {path:'about' ,  component:AboutComponent , title:"About"},
  {path:'categories' , component:CategoriesComponent , title:"Categories"},
  {path:'cart' , canActivate:[AuthGuard], component:CartComponent , title:"Cart"},
  {path:'products' , component:ProductsComponent , title:"Products"},
  {path:'productDetails/:id',canActivate:[AuthGuard] , component:ProductdetailsComponent , title:"ProductDetails"},
  {path:'checkout/:id/:owner',canActivate:[AuthGuard],component:CheckOutComponent , title:"Check"},
  {path:'wishlist' , canActivate:[AuthGuard], component:WishlistComponent , title:"Wishlist"},
  {path:'brands' ,  component:BrandssComponent , title:"Brands"},
  {path:'login' ,  component:LoginComponent },
  {path:'signUp' ,  component:RegisterComponent },
  {path:'allorders',canActivate:[AuthGuard],component:AllordersComponent ,title:'orderlist' },
  {path:'* *' ,  component:NotFoundComponent , title:"NotFoundComponent"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
