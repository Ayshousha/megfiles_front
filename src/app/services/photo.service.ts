import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  public async addNewToGallery(): Promise<string> {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    console.log(capturedPhoto);

    if (capturedPhoto?.dataUrl) {
      // Return the captured image data
      return Promise.resolve(capturedPhoto.dataUrl);
    }

    return Promise.resolve('');
  }
}
