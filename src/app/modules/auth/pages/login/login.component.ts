import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
      ]
    ],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
      ]
    ]
  });

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(res => {
        if(typeof res !== 'string') {
          console.log('You`re succesfully sign in');
          this.router.navigate(['/dashboard/makarland']);
        }
      });
  }

}
