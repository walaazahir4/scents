import { AfterViewInit, Component, signal } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'scents-navbar',
  imports: [Button, RouterModule ],
  templateUrl: './navbar.html',
})
export class Navbar implements AfterViewInit {
  isMenuOpen = signal(false);
 activeSection = signal('home');

  setActive(section: string) {
    this.activeSection.set(section);
  }
 ngAfterViewInit() {

    setTimeout(() => {

      const sections = document.querySelectorAll(
        '#home, #boutique, #occasions, #about, #contact'
      );

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }

          });

        },
        {
          root: null,
          threshold: 0.2,
          rootMargin: '-100px 0px -50% 0px'
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

    }, 500);
  }


}
