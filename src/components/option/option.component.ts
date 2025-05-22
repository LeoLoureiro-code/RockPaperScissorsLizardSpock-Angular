import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent { 

  @Input() name!: string;
  @Input() color?: string;
  @Input() imageUrl?: string;

}
