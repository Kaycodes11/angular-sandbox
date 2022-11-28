import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { UserModule } from './user/user.module';
import { JokeModule } from './joke/joke.module';

@NgModule({
  declarations: [AppComponent, ChildComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, JokeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
