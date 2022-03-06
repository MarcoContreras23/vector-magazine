import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxCaptchaModule } from "ngx-captcha";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./landing/header/header.component";
import { HomeComponent } from "./landing/home/home.component";
import { FooterComponent } from "./landing/footer/footer.component";
import { CarouselComponent } from "./landing/carousel/carousel.component";
import { TemporalComponent } from "./landing/temporal/temporal.component";
import { HttpClientModule } from '@angular/common/http';
import { UserManualComponent } from './landing/user-manual/user-manual.component';  
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    TemporalComponent,
    UserManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
