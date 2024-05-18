import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TitleComponent } from '../../partials/title/title.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [TitleComponent,ReactiveFormsModule,OrderItemsListComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit{
  order:Order = new Order();
  checkoutForm!:FormGroup;

  constructor(cartService:CartService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private orderService:OrderService,
    private router:Router
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;

  }

  ngOnInit(): void {
      let {name,address,email} = this.userService.currentUser;
      this.checkoutForm = this.formBuilder.group({
        name: [name, Validators.required],
        address: [address,Validators.required],
        email: [email,Validators.required]
      });
      console.log(this.userService.currentUser);
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if(this.checkoutForm.invalid) {
      this.toastrService.warning("Please Fill The Inputs","Invalid Inputs");
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    this.order.email = this.fc.email.value;
    this.order.addressLatLng = "San Diego 1550 Ford Street 92103 UTC-8: Pacific Standard Time (PST)";

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl("/payment");
      },
      error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,"Cart");
      }
    })

    console.log(this.order);
  }
}
