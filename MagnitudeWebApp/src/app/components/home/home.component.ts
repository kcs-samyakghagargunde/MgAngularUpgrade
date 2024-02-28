import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // gifVideo: HTMLVideoElement | null = document.getElementById('gif') as HTMLVideoElement;

  // stopGifAfter2Seconds(): void {
  //   setTimeout(() => {
  //     if (this.gifVideo) {
  //       const pauseEvent = new Event('pause');
  //       this.gifVideo.dispatchEvent(pauseEvent);
  //     }
  //   }, 2000);
  // }
  
  constructor(private router: Router) {}
  loginpage(){
    debugger;
    this.router.navigate(['/login']); 
  }
  @ViewChild('gifImage') gifImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.gifImage.nativeElement.src = this.gifImage.nativeElement.src;
    }, 1500);
  }

}
