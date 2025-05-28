import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() imageUrl!: string;
  @Input() altText: string = 'Modal Image';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
