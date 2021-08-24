import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'app-welcome-login',
  templateUrl: './welcome-login.component.html',
  styleUrls: ['./welcome-login.component.scss']
})
export class WelcomeLoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  public googleAuth() {
    this.authService.GoogleAuth().subscribe(res => {
      console.log("You`re succesfully log in", res);
      this.router.navigate(['/dashboard/makarland']);
    })
  }

}
