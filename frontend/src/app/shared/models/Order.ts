import { OnInit } from "@angular/core";
import { CartItem } from "./CartItem";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  email!: string;
  addressLatLng?:string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
