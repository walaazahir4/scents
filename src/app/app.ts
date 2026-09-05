import { Component, signal } from '@angular/core';
import { Navbar } from "./layout/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/ui/button/button";
import { Test } from "./layout/test/test";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Test, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('scents');
}
