import { Component } from '@angular/core';
import { CatCard } from "../../shared/ui/cat-card/cat-card";
import { CardsCard } from "../../shared/ui/cards-card/cards-card";

@Component({
  selector: 'scents-occasion',
  imports: [CatCard, CardsCard],
  templateUrl: './occasion.html',
})
export class Occasion {
cards=[
  {img: '/images/birthday.png', text: 'Birthday'},
  {img: '/images/anni.png', text: 'Anniversary'},
  {img: '/images/sympathy.png', text: 'Sympathy'},
  {img: '/images/just.png', text: 'Just because'}
]

occasions = [ 
  {img: '/images/card1.jpg', title: 'Rose Elegance', desc: 'A timeless bouquet of red roses, elegantly wrapped for the one you love.', price: '$49.99'},
  {img: '/images/card2.jpg', title: 'Rose Elegance', desc: 'A timeless bouquet of red roses, elegantly wrapped for the one you love.', price: '$49.99'},
  {img: '/images/card3.jpg', title: 'Rose Elegance', desc: 'A timeless bouquet of red roses, elegantly wrapped for the one you love.', price: '$49.99'},
]
}
