import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {


  // Product list based on your reference image
  products = [
    {
      name: 'Akshay Pileorhoids Capsule',
      image: 'assets/products/p1.jpg',
      color: '#001a72' // Dark blue footer color
    },
    {
      name: 'Akshay Amrit Juice',
      image: 'assets/products/p2.jpg',
      color: '#001a72'
    },
    {
      name: 'Akshay Daibo G',
      image: 'assets/products/p3.jpg',
      color: '#001a72'
    },
    {
      name: 'Akshay Artho G',
      image: 'assets/products/p4.jpg',
      color: '#001a72'
    },
    {
      name: 'Akshay Power Booster Plus',
      image: 'assets/products/p5.jpg',
      color: '#001a72'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
