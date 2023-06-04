import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-file',
  templateUrl: './confirm-file.page.html',
  styleUrls: ['./confirm-file.page.scss'],
})
export class ConfirmFilePage implements OnInit {

  constructor() { }
  confirm() {
    // Add your logic here to handle the confirm button action
    console.log('Confirmed!');
    // You can perform any desired actions, such as making an API request or navigating to another page.
  }
  ngOnInit() {
  }

}
