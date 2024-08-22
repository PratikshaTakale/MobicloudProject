import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormSubmittedDialog } from '../form-submiited-dialouge/form-submiited-dialouge.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  personalDetailsFormGroup: FormGroup | any;
  addressFormGroup: FormGroup | any;
  educationFormGroup: FormGroup | any;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.personalDetailsFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
    this.educationFormGroup = this._formBuilder.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      graduationYear: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.personalDetailsFormGroup.valid && this.addressFormGroup.valid && this.educationFormGroup.valid) {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(FormSubmittedDialog, {
      width: '250px',
      data: { message: 'Form Submitted Successfully!' }
    });
  }
}
