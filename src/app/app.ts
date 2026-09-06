import { Component, signal } from '@angular/core';
import { Navbar } from "./layout/navbar/navbar";
import { Test } from "./layout/test/test";
import { Footer } from "./layout/footer/footer";
import { Home } from "./components/home/home";
import { Boutique } from "./components/boutique/boutique";
import { Occasion } from "./components/occasion/occasion";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Test, Footer, Home, Boutique, Occasion, About, Contact, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('scents');
}
