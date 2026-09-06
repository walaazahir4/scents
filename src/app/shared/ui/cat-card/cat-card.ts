import { Component, input } from '@angular/core';

@Component({
  selector: 'scents-cat-card',
  imports: [],
  templateUrl: './cat-card.html',
})
export class CatCard {
text = input<string>('Birthday')
image = input<string>('/images/birthday.png')

}
