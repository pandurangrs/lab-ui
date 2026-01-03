import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-baneer',
  templateUrl: './main-baneer.component.html',
  styleUrls: ['./main-baneer.component.css']
})
export class MainBaneerComponent implements OnInit {


  // List of your 7 images
  images: string[] = [
    '../../../assets/banner/1.jpg',
    '../../../assets/banner/2.jpg',
    '../../../assets/banner/3.jpg',
    '../../../assets/banner/4.jpg',
    '../../../assets/banner/5.jpg',
    '../../../assets/banner/6.jpg',
    '../../../assets/banner/7.jpg'
  ];


  currentIndex: number = 0;
  intervalId: any;

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    // Change image every 3 seconds
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnDestroy() {
    // Clean up timer when component is closed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
