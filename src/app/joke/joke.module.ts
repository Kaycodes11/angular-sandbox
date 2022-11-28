import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeListComponent } from './joke-list.component';
import { JokeComponent } from './joke.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [JokeListComponent, JokeComponent, CardHoverDirective],
  imports: [CommonModule],
  exports: [JokeListComponent],
})
export class JokeModule {}
