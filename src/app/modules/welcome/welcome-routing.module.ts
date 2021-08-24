import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeLoginComponent } from './pages/welcome-login/welcome-login.component';
import { WelcomeRegisterComponent } from './pages/welcome-register/welcome-register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login',
          },
          {
            path: 'login',
            component: WelcomeLoginComponent,
          },
          {
            path: 'register',
            component: WelcomeRegisterComponent,
          },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }