import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  // @Output this event can be listen outside of this component
  @Output() intervalFiredEvent  = new EventEmitter<number>();
  counter : number = 0;
  setIntervalRef = null;

  startTimer()
  {
    this.setIntervalRef = setInterval(() => {
      this.intervalFiredEvent.emit(this.counter + 1);
      this.counter = this.counter + 1;
    }, 1000)
  }

  stopTimer()
  {
    clearInterval(this.setIntervalRef);
  }
}
