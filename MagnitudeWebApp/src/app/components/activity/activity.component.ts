import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  constructor(private router: Router){
    
  }
  GetContatlist(){
    debugger
    this.router.navigate(['/contactlist']);
  }
}
