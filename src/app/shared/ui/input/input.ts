import { Component, input } from '@angular/core';

@Component({
  selector: 'scents-input',
  imports: [],
  templateUrl: './input.html',
})
export class Input {
  variant = input<'input' | 'textarea'>('input');
  label = input<string>('Full name');
  placeholder = input<string>('Enter your name');
  icon = input<string>('user');
  type = input<string>('email');
}
