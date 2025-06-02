import { Component, OnInit } from '@angular/core';
import { ScoreComponent } from "../score/score.component";
import { OptionsComponent } from "../options/options.component";
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { OptionComponent } from '../option/option.component';


@Component({
  selector: 'board',
  standalone: true,
  imports: [ScoreComponent, OptionsComponent, ModalComponent, CommonModule, OptionComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{

score = 0;

selectedOption: string | null = null;
cpuOption: string | null = null;
winner: 'user' | 'cpu' | 'tie' | null = null;

isModalOpen = false;
modalImageUrl = '';

constructor(private gameService: GameService) {}

ngOnInit() {
  this.gameService.GetScore().subscribe(scoreValue => {
    this.score = scoreValue;
  });
}

handleOptionSelection(userOption: string) {
  this.selectedOption = userOption;
  this.cpuOption = this.gameService.getRandomOption();
  this.winner = this.gameService.determineWinner(userOption, this.cpuOption);

  if (this.winner === 'user') {
    this.gameService.IncrementScore();
  } else if (this.winner === 'cpu') {
    this.gameService.DecrementScore();
  }
}



resetGame() {
  this.selectedOption = null;
  this.cpuOption = null;
  this.winner = null;
}

  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
