import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {  ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 0.5 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out')
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
  
})
export class ActivityComponent {
  showNewComponent  = false;
  clickedImage: any = {};
  clickedActivityName!: string;

  constructor(private router: Router,private authService: AuthService,private route: ActivatedRoute){}

  images = [
    { src: 'assets/Logo.png', activityName: 'Activity 1' },
    { src: 'assets/Logo.png', activityName: 'Activity 2' },
    { src: 'assets/Logo.png', activityName: 'Activity 3' },
    { src: 'assets/Logo.png', activityName: 'Activity 4' },
    { src: 'assets/Logo.png', activityName: 'Activity 5' },
    { src: 'assets/Logo.png', activityName: 'Activity 6' },
    { src: 'assets/Logo.png', activityName: 'Activity 7' },
    { src: 'assets/Logo.png', activityName: 'Activity 8' },
  ];

  onImageClick(image: any) {
    this.clickedImage = image;
    this.clickedActivityName = image.activityName;
    this.showNewComponent = true;
  }
  onCloseNewComponent() {
    this.showNewComponent = false;
    this.router.navigate(['/activity']);
  }

  GetContatlist(){
    this.router.navigate(['/contactlist']);
  }
}
