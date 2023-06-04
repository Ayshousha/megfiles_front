import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.page.html',
  styleUrls: ['./list-files.page.scss'],
})
export class ListFilesPage implements OnInit {

  constructor() { }
  cardItems = [
    {
      id: 1,
      image: 'assets/images/image1.jpg',
      title: 'Card 1',
      description: 'This is the first card',
    },
    {
      id: 2,
      image: 'assets/images/image2.jpg',
      title: 'Card 2',
      description: 'This is the second card',
    },
    // Add more card items as needed
  ];
  ngOnInit() {
  }

}
