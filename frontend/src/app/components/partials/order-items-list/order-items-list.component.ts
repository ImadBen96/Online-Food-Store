import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order-items-list',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent {

  @Input()
  order!: Order;



}
