import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'score',
  standalone: true,
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.GetScore().subscribe(score => {
      this.score = score;
    });
  }
}