import { Component } from '@angular/core';
import { ReviewsCard } from "../../shared/ui/reviews-card/reviews-card";
import { CommonModule } from '@angular/common';
import { ServiceCards } from "../../shared/ui/service-cards/service-cards";

@Component({
  selector: 'scents-contact',
  imports: [ReviewsCard, CommonModule, ServiceCards],
  templateUrl: './contact.html',
})
export class Contact {
reviews = [   
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
  {img: '/images/user1.jpg', name: 'Sara M., Cairo', desc: 'Sara M., Cairo'}, 
]

services = [
  {icon: 'truck', title: 'Same Day Deliver', desc: '“Fresh flowers delivered to your door, the very same day' },
  {icon: 'sparkles', title: 'Customer arrangements', desc: '“A glimpse of the special bouquets we created for our happy customers.”' },
  {icon: 'gift', title: 'Event Floristry', desc: '“Transforming your events into unforgettable moments with elegant floral designs.”' },
]
}
