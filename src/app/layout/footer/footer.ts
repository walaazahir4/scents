import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { Input } from "../../shared/ui/input/input";

@Component({
  selector: 'scents-footer',
  imports: [CommonModule, Button, Input],
  templateUrl: './footer.html',
})
export class Footer {
  cards = [
    {icon: 'phone', title: 'Contact Us', text: '01278899599'},
    {icon: 'envelope', title: 'Shop Bouquets', text: 'walaazahir4@gmail.com'},
    {icon: 'map-marker', title: 'ADDRESS', text: '123 Flower Street, Nasr City, Cairo, Egyp'},
  ]

  inputs = [
    {label: 'Full name', icon: 'user', placeholder: 'Enter your name', type: 'text'},
    {label: 'Email', icon: 'envelope', placeholder: 'Enter your email address', type: 'email'},
  ]

  icons = [
    {icon: 'facebook', color: 'black'},
    {icon: 'linkedin', color: 'black'},
    {icon: 'youtube', color: 'red-500'}
  ]
}
