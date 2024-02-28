import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @Input() existingContact: any;
  newContact: any = {};
  errorMessage: string = '';
  constructor( private Contact: AuthService,
    private router: Router){

  }
  ngOnInit() {
    // If there's an existing contact, fill the form with its data
    if (this.existingContact) {
      this.newContact = { ...this.existingContact };
    }
  }
  addContact() {
    this.Contact.addContact(this.newContact).subscribe(
      () => {
        alert('Successfully inserted data!');
        this.router.navigate(['/contactlist']);
      },
      (error) => {
        console.error('Error adding category:', error);
        this.errorMessage = 'Error adding category. Please check the console for details.';
      }
    );
  }

}

