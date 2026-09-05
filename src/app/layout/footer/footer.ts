import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'scents-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  cards = [
    {icon: 'phone', title: 'Contact Us', text: '01278899599'},
    {icon: 'envolpe', title: 'Shop Bouquets', text: 'walaazahir4@gmail.com'},
    {icon: 'site', title: 'ADDRESS', text: '123 Flower Street, Nasr City, Cairo, Egyp'},
  ]

}
