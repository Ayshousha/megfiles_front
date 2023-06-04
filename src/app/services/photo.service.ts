import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor( private  http:HttpClient ,) { }

  public async addNewToGallery() {


    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    console.log(capturedPhoto);

    if (capturedPhoto?.path) {
      // Get the file path from the captured photo
      const photoPath = capturedPhoto.path;

      // Read the file as data
      const fileData = await Filesystem.readFile({
        path: photoPath,
        directory: Directory.Data // Update the directory based on your needs
      });


      // Create a new FormData object
      const formData = new FormData();

      // Append the file data to the FormData object
      formData.append('file', fileData.data, 'photo.jpg');

      // Now you can use the formData object to send the file data to the backend using appropriate methods (e.g., HTTP request)



    }
  }
}
