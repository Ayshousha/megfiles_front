import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image : any 
  constructor(public photoService: PhotoService) { }
  addPhotoToGallery() {

    this.photoService.addNewToGallery().then((imageDataURL) => {
      this.image = imageDataURL;
      console.log(imageDataURL)
    });

  }
  sendPic() {
    this.photoService.sendPhoto(this.image).subscribe({
      next: (response: any) => {
        // Handle the successful response here
        console.log(response);
      },
      error: (error: any) => {
        // Handle the error here
        console.error(error);
      }
    });
  }
}
