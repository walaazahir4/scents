import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { TranslateHelper } from '../../../core/services/translate-helper';

@Component({
  selector: 'scents-input',
  imports: [CommonModule],
  templateUrl: './input.html',
})
export class Input {
  variant = input<'input' | 'textarea'>('input');
  label = input<string>('Full name');
  placeholder = input<string>('Enter your name');
  icon = input<string>('user');
  type = input<string>('email');

translateHelper = inject(TranslateHelper)

}
