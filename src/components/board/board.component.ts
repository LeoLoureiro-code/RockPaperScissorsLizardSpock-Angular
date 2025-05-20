import { Component } from '@angular/core';
import { ScoreComponent } from "../score/score.component";

@Component({
  selector: 'board',
  standalone: true,
  imports: [ScoreComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
