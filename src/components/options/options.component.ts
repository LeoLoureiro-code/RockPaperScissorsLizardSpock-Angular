import { Component } from '@angular/core';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'options',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {

}
