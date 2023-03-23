import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layoutd/default/default.module';
import { FullpageModule } from './layoutd/fullpage/fullpage.module';
import { FullpageadminModule } from './layoutd/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FullpageadminemptyModule } from './layoutd/fullpageadminempty/fullpageadminempty.module';
import { JwtInterceptor } from './modules/common/interceptor/jwt.interceptor';
import { AdminAuthorizeGuard } from './modules/common/guard/adminAuthorizeGuard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageadminModule,
    FullpageadminemptyModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AdminAuthorizeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
