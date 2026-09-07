import { Component } from '@angular/core';
import { ReviewsCard } from "../../shared/ui/reviews-card/reviews-card";
import { CommonModule } from '@angular/common';
import { ServiceCards } from "../../shared/ui/service-cards/service-cards";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-contact',
  imports: [ReviewsCard, CommonModule, ServiceCards, TranslatePipe],
  templateUrl: './contact.html',
})
export class Contact {
reviews = [   
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
]

services = [
  {icon: 'truck', title: 'contact.cardTitleOne', desc: 'contact.cardDescOne' },
  {icon: 'sparkles', title: 'contact.cardTitleTwo', desc: 'contact.cardDescTwo' },
  {icon: 'gift', title: 'contact.cardTitleThree', desc: 'contact.cardDescThree' },
]
}
