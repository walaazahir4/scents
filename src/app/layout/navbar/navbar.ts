import { Component } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'scents-navbar',
  imports: [Button, RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {

}
