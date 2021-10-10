import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Array<any> = [];
  information: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      { id: '1', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image7.jpg", image2: "assets/images/image6.jpg" },
      { id: '2', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image6.jpg", image2: "assets/images/image7.jpg" },
      { id: '3', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image7.jpg", image2: "assets/images/image6.jpg" },
      { id: '4', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image6.jpg", image2: "assets/images/image7.jpg" },
      { id: '5', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image7.jpg", image2: "assets/images/image6.jpg" },
      { id: '6', title: "User Research for User Experience Design", text: "The Museum of Modern Art", image1: "assets/images/image6.jpg", image2: "assets/images/image7.jpg" },
    ]
    this.information = [
      { id: '1', number: "768", title: "Courses published", image: "assets/images/test2.png" },
      { id: '2', number: "120", title: "Expert Instructors", image: "assets/images/test2.png" },
      { id: '3', number: "8,300", title: "Happy Learners", image: "assets/images/test2.png" },
      { id: '4', number: "32", title: "Awards Achieved", image: "assets/images/test2.png" },

    ]
  }

}
