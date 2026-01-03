import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {
videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    // Replace 'VIDEO_ID' with the actual ID from your YouTube video
    const url = 'https://www.youtube.com/embed/DQTKecWB9OM'; 
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }

  ngOnInit() {
  }

}
