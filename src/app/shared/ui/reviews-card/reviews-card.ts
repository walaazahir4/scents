import { Component, input } from '@angular/core';

@Component({
  selector: 'scents-reviews-card',
  imports: [],
  templateUrl: './reviews-card.html',
})
export class ReviewsCard {
img = input<string>('/images/user1.jpg');
name = input<string>('Sara M., Cairo');
desc = input<string>('Sara M., Cairo');
}
