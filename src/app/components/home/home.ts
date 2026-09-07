import { Component } from '@angular/core';
import { Button } from "../../shared/ui/button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scents-home',
  imports: [Button, TranslatePipe],
  templateUrl: './home.html',
})
export class Home {

}
