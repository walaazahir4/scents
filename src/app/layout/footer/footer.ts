import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { Input } from "../../shared/ui/input/input";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-footer',
  imports: [CommonModule, Button, Input, TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {
  cards = [
    {icon: 'phone', title: 'footer.contact', text: '01278899599'},
    {icon: 'envelope', title: 'footer.shop', text: 'walaazahir4@gmail.com'},
    {icon: 'map-marker', title: 'footer.add', text: '123 Flower Street, Nasr City, Cairo, Egyp'},
  ]

  inputs = [
    {label: 'footer.label', icon: 'user', placeholder: 'footer.placeholder', type: 'text'},
    {label: 'footer.email', icon: 'envelope', placeholder: 'footer.placeEmail', type: 'email'},
  ]

  icons = [
    {icon: 'facebook', color: 'black'},
    {icon: 'linkedin', color: 'black'},
    {icon: 'youtube', color: 'red-500'}
  ]
}
