import { Component, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'joke',
  template: `
    <div
      class="card card-block"
      [ccCardHover]="{ querySelector: '.card-text' }"
    >
      <h4 class="card-title">{{ data.setup }}</h4>
      <!-- <p class="card-text" [hidden]="data.hide">{{ data.punchline }}</p>
      <button (click)="data.toggle()" class="btn btn-primary">Tell Me</button> -->
      <!-- just comment out above 2 lines when using host listener and host binding -->
      <p class="card-text" [style.display]="'none'">{{ data.punchline }}</p>
    </div>
  `,
})
export class JokeComponent {
  @Input('joke') data!: Joke;
}
