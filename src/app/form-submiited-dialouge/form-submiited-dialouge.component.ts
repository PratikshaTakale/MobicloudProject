// src/app/components/form-submitted-dialog/form-submitted-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'form-submitted-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule
    
  ],
  template: `
    <h1 mat-dialog-title>Form Submitted</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>OK</button>
    </div>
  `
})
export class FormSubmittedDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
