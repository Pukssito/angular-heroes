import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

//incrementar contador
increaseBy( value: number): void {

  this.counter += value;

}
//resetear contador
reset (): void {
 this.counter = 10;
}

}
