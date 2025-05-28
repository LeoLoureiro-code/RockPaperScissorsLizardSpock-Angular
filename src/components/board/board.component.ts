import { Component } from '@angular/core';
import { ScoreComponent } from "../score/score.component";
import { OptionsComponent } from "../options/options.component";
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'board',
  standalone: true,
  imports: [ScoreComponent, OptionsComponent, ModalComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  gameState: 'select' | 'animating' | 'result' = 'select';
  playerChoice: string = '';

  isModalOpen = false;
  modalImageUrl = '';

  handleOptionSelection(option: string) {
  console.log('User selected:', option);
  }

  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
