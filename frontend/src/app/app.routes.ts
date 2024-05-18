import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './components/pages/contact-us-page/contact-us-page.component';

export const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "search/:searchTerm",
    component: HomeComponent
  },
  {
    path:"food/:id",
    component: FoodPageComponent
  },
  {
    path: "tag/:tag",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent,
    canActivate: [authGuard]
  },
  {
    path: "payment",
    component: PaymentPageComponent,
    canActivate: [authGuard]
  },
  {
    path: "track/:orderId",
    component: OrderTrackPageComponent,
    canActivate: [authGuard]
  },
  {
    path:"about-us",
    component: AboutUsPageComponent
  },
  {
    path: "contact-us",
    component: ContactUsPageComponent
  }
];
