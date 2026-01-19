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
      name: 'Kurmayu Pileorhoids Capsule',
      image: 'assets/products/prod11.webp',
      color: '#001a72' // Dark blue footer color
    },
    {
      name: 'Kurmayu Amrit Juice',
      image: 'assets/products/prod12.webp',
      color: '#001a72'
    },
    {
      name: 'Kurmayu Daibo G',
      image: 'assets/products/prod13.jpg',
      color: '#001a72'
    },
    {
      name: 'Kurmayu Artho G',
      image: 'assets/products/prod14.avif',
      color: '#001a72'
    },
    {
      name: 'Kurmayu Power Booster Plus',
      image: 'assets/products/prod15.jpg',
      color: '#001a72'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
