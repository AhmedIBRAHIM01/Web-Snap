import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-upload',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  constructor(private uploadService: UploadService) {
  }
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
    if (this.selectedFile) {
      this.uploadService.uploadImage(this.selectedFile).subscribe({
        next: (res) => {
          console.log('Upload erfolgreich:', res);
          alert('Bild hochgeladen!');
        },
        error: (err) => {
          console.error('Fehler beim Upload:', err);
        },
      });
    }
  }

}
