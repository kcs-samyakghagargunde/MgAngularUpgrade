import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,private router: Router,public dialog: MatDialog) { }

  usernamePlaceholder: string = 'admin';
  passwordPlaceholder: string = '@#*****';
  username: string = '';
  password: string = '';
  usernameValidationMessage: string = '';
  passwordValidationMessage: string = '';

  setPlaceholder(event: Event, placeholder: string) {
    const input = event.currentTarget as HTMLInputElement;
    input.placeholder = placeholder;
  }

  clearPlaceholder(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    input.placeholder = '';
  }
  onSubmit() {
    // Validation logic
    if (this.username.length < 4) {
      this.usernameValidationMessage = 'Username must be at least 4 characters long.';
    } 
    // else if (!/^[a-zA-Z]+$/.test(this.username)) {
    //   this.usernameValidationMessage = 'Username must contain only letters.';
    // }
    else {
      this.usernameValidationMessage = '';
    }
  
    if (this.password.length < 4) {
      this.passwordValidationMessage = 'Password must be at least 4 characters long.';
    } else if (this.username === this.password) {
      this.passwordValidationMessage = 'Password cannot be the same as username.';
    } else {
      this.passwordValidationMessage = '';
    }
  
    // Check for empty fields
    if (!this.username) {
      this.usernameValidationMessage = 'Please enter a username.';
    }
  
    if (!this.password) {
      this.passwordValidationMessage = 'Please enter a password.';
    }

    if (!this.usernameValidationMessage && !this.passwordValidationMessage) {
    
      console.log('Form submitted with username:', this.username, 'and password:', this.password);
    //  this.authService.login(this.username, this.password).subscribe(() => {
  
      this.router.navigate(['/activity']); 
    // });
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '350px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
}
