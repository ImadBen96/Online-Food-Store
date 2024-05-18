import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user!:User;
  status: boolean = false;

  constructor(cartService:CartService,private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
        this.user = newUser;
    })
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }

  toogleMenu() {
    this.status = !this.status;
  }

  ngOnInit(): void {

  }
}
