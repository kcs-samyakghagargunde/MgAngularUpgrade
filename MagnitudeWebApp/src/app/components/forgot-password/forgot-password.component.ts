import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string | undefined;

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
  }

  sendResetLink(): void {
    // Send reset link logic here...
    console.log('Sending reset link to:', this.email);
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
