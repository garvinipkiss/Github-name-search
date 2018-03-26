import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AlertsService } from './alert-service/alerts.service'
import { AppComponent } from './app.component';
import { accountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    accountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
