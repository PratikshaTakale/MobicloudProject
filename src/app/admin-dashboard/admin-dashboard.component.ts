import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  personalDetailsFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  educationFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.personalDetailsFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.addressFormGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    this.educationFormGroup = this.fb.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      graduationYear: ['', [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear())
      ]]
    });
  }

  onSubmit() {
    if (
      this.personalDetailsFormGroup.valid &&
      this.addressFormGroup.valid &&
      this.educationFormGroup.valid
    ) {
      this._snackBar.open('Form Submitted Successfully!', 'Close', {
        duration: 3000,
      });
      this.personalDetailsFormGroup.reset();
      this.addressFormGroup.reset();
      this.educationFormGroup.reset();
    }
  }
}
