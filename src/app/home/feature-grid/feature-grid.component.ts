import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-grid',
  templateUrl: './feature-grid.component.html',
  styleUrls: ['./feature-grid.component.css']
})
export class FeatureGridComponent implements OnInit {

features = [
    {
      title: 'Achievers Top Leaders',
      image: 'assets/features/wellness.jpg',
      bgColor: '#00bcd4' // Light Blue
    },
    {
      title: 'Health & Wellness',
      image: 'assets/features/health_care.jpg',
      bgColor: '#000000' // Black/Galaxy
    },
    {
      title: 'Ayurvedic Products',
      image: 'assets/features/ayurveda.jpg',
      bgColor: '#00a859' // Green
    },
    {
      title: 'Business Opportunity',
      image: 'assets/features/growth.jpg',
      bgColor: '#0d47a1' // Dark Blue
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
