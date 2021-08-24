import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
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
    this.authService.signUp(this.registerForm.value.email, this.registerForm.value.password)
      .subscribe(res => {
        if(typeof res !== 'string') {
          console.log('You`re succesfully sign up');
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
