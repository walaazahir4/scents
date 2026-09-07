import { Component } from '@angular/core';
import { CatCard } from "../../shared/ui/cat-card/cat-card";
import { CardsCard } from "../../shared/ui/cards-card/cards-card";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-occasion',
  imports: [CatCard, CardsCard, TranslatePipe],
  templateUrl: './occasion.html',
})
export class Occasion {
cards=[
  {img: '/images/birthday.png', text: 'occasions.birthday'},
  {img: '/images/anni.png', text: 'occasions.anniversary'},
  {img: '/images/sympathy.png', text: 'occasions.sympathy'},
  {img: '/images/just.png', text: 'occasions.justBecause'}
]

occasions = [ 
  {img: '/images/card1.jpg', title: 'occasions.titleCard', desc: 'occasions.descCard', price: '$49.99'},
  {img: '/images/card2.jpg', title: 'occasions.titleCard', desc: 'occasions.descCard', price: '$49.99'},
  {img: '/images/card3.jpg', title: 'occasions.titleCard', desc: 'occasions.descCard', price: '$49.99'},
]
}
