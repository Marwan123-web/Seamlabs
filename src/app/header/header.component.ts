import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;
  display: boolean = true;
  constructor() {}
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.display = false;
    } else {
      this.display = true;
    }
    this.timer();
  }
  timer() {
    var countDownDate = new Date('Oct 12, 2021 00:00:00').getTime();
    setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      console.log(
        this.days + ' ' + this.hours + ' ' + this.minutes + ' ' + this.seconds
      );
    }, 1000);
  }
}
