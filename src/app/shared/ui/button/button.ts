import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'scents-button',
  imports: [
    CommonModule
],
  templateUrl: './button.html',
})
export class Button {
text = input<string>('LOGIN')
variant = input<'default' | 'withBorder' | 'without'>('default')
disabled = input<boolean>(false);
}
