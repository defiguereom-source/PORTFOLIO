import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuOpen = false;
  activeSection = 'inicio';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
      this.activeSection = 'inicio';
    }
  }
}