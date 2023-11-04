import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate: [authGuard], component: HomeComponent },
  { path: "Categories", canActivate: [authGuard], component: CategoriesComponent },
  { path: "produts", canActivate: [authGuard], component: FeaturedProductsComponent },


  { path: "productDetails/:id", canActivate: [authGuard], component: ProductDetailsComponent },
  { path: "setting", canActivate: [authGuard], loadChildren: () => import('./setting/setting.module').then((x) => x.SettingModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'wishList', loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },

  { path: "checkout/:cartId", component: CheckoutComponent },
  { path: "allorders", component: OrdersComponent },
  { path: "brands",  loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)},


  // it's just for testing standalone component 
  { path: "student", loadComponent: () => import('./student/student.component').then(c => c.StudentComponent) },




  { path: "register", component: SignUpComponent },
  { path: "login", component: SignInComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "verify-code", component: VerifyCodeComponent },
  { path: "reset-password", component: ResetPasswordComponent },






  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
