import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-upload',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null=null;
  previewUrl: string | ArrayBuffer | null= null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.previewUrl = reader.result;
          console.log('Vorschau gesetzt:', this.previewUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage():void{
    if(this.selectedFile){
      console.log(`Bild zum Hochladen:`, this.selectedFile)
    }
  }

}
