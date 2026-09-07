import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-boutique',
  imports: [TranslatePipe],
  templateUrl: './boutique.html',
})
export class Boutique {
pics = [
  {pic: '/images/f1.jpg'},
  {pic: '/images/ftwo.png'},
  {pic: '/images/f3.png'},
]
}
