import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payroll } from '../payroll';
import { PayrollService } from '../payroll.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
  payrollForm: FormGroup;
  payrollData: Payroll[] = [];

  constructor(private fb: FormBuilder, private payrollService: PayrollService) {
    this.payrollForm = this.fb.group({
      employeeName: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required]
    });

    this.payrollService.getPayrollData().subscribe(data => {
      this.payrollData = data;
    });
  }

  onSubmit() {
    if (this.payrollForm.valid) {
      const newPayroll: Payroll = {
        id: Date.now(),
        ...this.payrollForm.value
      };
      this.payrollService.addPayrollRecord(newPayroll);
      this.payrollForm.reset();
    }
  }

  onDelete(id: number) {
    this.payrollService.deletePayrollRecord(id);
  }


}
