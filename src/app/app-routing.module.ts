import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from "./app.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { CaptureComponent } from "./capture/capture.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'capture', component: CaptureComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
