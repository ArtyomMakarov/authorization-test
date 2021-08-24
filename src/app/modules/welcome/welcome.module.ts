import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeLoginComponent } from './pages/welcome-login/welcome-login.component';
import { WelcomeRegisterComponent } from './pages/welcome-register/welcome-register.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeLoginComponent,
    WelcomeRegisterComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
