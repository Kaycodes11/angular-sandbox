import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'

import {AppRoutingModule} from './app-routing.module';
import {ChildComponent} from './child/child.component';
import {NavComponent} from './nav/nav.component';
import {UserModule} from './user/user.module';
import {JokeModule} from './joke/joke.module';
import {OrdersModule} from './orders/orders.module';
import {CustomersModule} from './customers/customers.module';
import {AboutComponent} from './about/about.component';
import {EditAboutComponent} from './edit-about/edit-about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {ProductsComponent} from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NavComponent,
    AboutComponent,
    EditAboutComponent,
    NotFoundComponent,
    ContactComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    JokeModule,
    OrdersModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
