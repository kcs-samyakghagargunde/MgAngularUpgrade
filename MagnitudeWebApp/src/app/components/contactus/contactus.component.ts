import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
    constructor(private router: Router) {}
    contactForm = {
        name: '',
        email: '',
        phone: '',
        query: ''
      };
      goBack(){
        this.router.navigate(['/login']); 
      }
}
