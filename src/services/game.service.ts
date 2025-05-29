import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {

  playerChoise! :string;
  CPUChoise! :string;
  
  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
