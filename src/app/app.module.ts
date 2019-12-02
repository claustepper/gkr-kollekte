import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CaptureComponent } from './capture/capture.component';
import { MaterialModule } from "./material.module";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CaptureComponent,
    SignupComponent,
    LoginComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
