import { Component } from '@angular/core';
import { ScoreComponent } from "../score/score.component";
import { OptionsComponent } from "../options/options.component";

@Component({
  selector: 'board',
  standalone: true,
  imports: [ScoreComponent, OptionsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
