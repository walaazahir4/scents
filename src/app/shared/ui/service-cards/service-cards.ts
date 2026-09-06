import { Component, input } from '@angular/core';

@Component({
  selector: 'scents-service-cards',
  imports: [],
  templateUrl: './service-cards.html',
})
export class ServiceCards {
icon = input<string>('truck')
title = input<string>('Same Day Deliver')
desc = input<string>('“Fresh flowers delivered to your door, the very same day”')
}
