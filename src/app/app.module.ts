import { BrowserModule } from '@angular/platform-browser';
import {AlertsService} from './alert-service/alerts.service'
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { accountComponent, AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    accountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertsService], // Add service
  bootstrap: [AppComponent]
})
export class AppModule { }
