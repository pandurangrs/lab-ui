import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  // Safe reference to the ABOUT menu trigger
  @ViewChild('aboutMenuTrigger') aboutMenuTrigger: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
    // No need to open menu here; template handles click
  }

  // Optional: safely open the ABOUT menu programmatically
  openAboutMenu(): void {
    if (this.aboutMenuTrigger && !this.aboutMenuTrigger.menuOpen) {
      this.aboutMenuTrigger.openMenu();
    }
  }

  // Optional: safely close the ABOUT menu programmatically
  closeAboutMenu(): void {
    if (this.aboutMenuTrigger && this.aboutMenuTrigger.menuOpen) {
      this.aboutMenuTrigger.closeMenu();
    }
  }
}
