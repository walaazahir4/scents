import { Component } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-about',
  imports: [Button, TranslatePipe],
  templateUrl: './about.html',
})
export class About {

}
