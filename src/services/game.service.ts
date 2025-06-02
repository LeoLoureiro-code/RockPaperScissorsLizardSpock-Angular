import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private scoreSubject = new BehaviorSubject<number>(0);

  options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  getRandomOption(): string {
    const index = Math.floor(Math.random() * this.options.length);
    return this.options[index];
  }

  determineWinner(user: string, cpu: string): 'user' | 'cpu' | 'tie' {
    const winsAgainst: Record<string, string[]> = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
    };

    if (user === cpu) return 'tie';
    if (winsAgainst[user].includes(cpu)) return 'user';
    return 'cpu';
  }

  GetScore(): Observable<number> {
  return this.scoreSubject.asObservable();
}

  IncrementScore() {
  this.scoreSubject.next(this.scoreSubject.value + 1);
}

  DecrementScore(){
    if(this.scoreSubject.value > 0){
      this.scoreSubject.next(this.scoreSubject.value - 1);
    }
  }
  
}
