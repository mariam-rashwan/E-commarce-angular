import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import{ HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriesComponent } from './categories/categories.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { TrimPipe } from './trim.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SignInComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    SignUpComponent,
    FooterComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    MainSliderComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    LoaderComponent,
    ForgetPasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule ,
    FormsModule,
    RouterModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
