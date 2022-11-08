import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layoutd/default/default.module';
import { FullpageModule } from './layoutd/fullpage/fullpage.module';

import { FullpageadminModule } from './layoutd/fullpageadmin/fullpageadmin.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageadminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
