import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent { 
  @Output() selected = new EventEmitter<string>();
  @Input() name!: string;
  @Input() color?: string;
  @Input() imageUrl?: string;

  chooseOption() {
  this.selected.emit(this.name);
}

}
