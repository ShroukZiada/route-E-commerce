import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SinglePageComponent } from './views/single-page/single-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './views/footer/footer.component';
import { CheckOutComponent } from './views/check-out/check-out.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';
import { OwlBrandsComponent } from './views/owl-brands/owl-brands.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductdetailsComponent } from './views/productdetails/productdetails.component';
import { OwlcategoriesComponent } from './views/owlcategories/owlcategories.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { ProductsComponent } from './views/products/products.component';
import { BrandssComponent } from './views/brandss/brandss.component';
import { SeemorePipe } from './shared/pipe/seemore.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component'
import { AddHeaderInterceptor } from './views/add-header.interceptor';
import { SearchPipe } from './shared/pipe/search.pipe';
import { SearchPricePipe } from './shared/pipe/search-price.pipe';
import { SearchBrandPipe } from './shared/pipe/search-brand.pipe';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllordersComponent } from './views/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeComponent,
    SinglePageComponent,
    FooterComponent,
    CheckOutComponent,
    CartComponent,
    AboutComponent,
    OwlBrandsComponent,
    CategoriesComponent,
    ProductdetailsComponent,
    OwlcategoriesComponent,
    WishlistComponent,
    ProductsComponent,
    BrandssComponent,
    SeemorePipe,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    SearchPricePipe,
    SearchBrandPipe,
    NotFoundComponent,
    AllordersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
