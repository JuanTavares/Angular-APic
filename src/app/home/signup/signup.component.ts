import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9_\-]+$/),
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        [this.userNotTakenValidatorService.checkUsernameTaken()]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18)
        ]
      ]
    });
  }

}
