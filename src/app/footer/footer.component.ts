import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  community: boolean = true;
  Informations: boolean = true;
  More: boolean = true;
  public innerWidth: any;
  display: boolean = true;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.display = false;
      this.community = false;
      this.Informations = false;
      this.More = false;
    } else {
      this.display = true;
      this.community = true;
      this.Informations = true;
      this.More = true;
    }
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.display = false;
      this.community = false;
      this.Informations = false;
      this.More = false;
    } else {
      this.display = true;
      this.community = true;
      this.Informations = true;
      this.More = true;
    }
  }
  displayCommunity(){
    if (!this.display) {
      this.community = !this.community ;
    }
  }
  displayInformations(){
    if (!this.display) {
      this.Informations = !this.Informations ;
    }
  }
  displayMore(){
    if (!this.display) {
      this.More = !this.More ;
    }
  }
}
