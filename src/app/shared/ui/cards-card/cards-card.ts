import { Component, input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'scents-cards-card',
  imports: [Button],
  templateUrl: './cards-card.html',
})
export class CardsCard {
img = input<string>('/images/card1.jpg')
title = input<string>('Rose Elegance')
desc = input<string>('A timeless bouquet of red roses, elegantly wrapped for the one you love.')
price = input<string>('$49.99')
}
