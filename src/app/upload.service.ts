import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ObjectUnsubscribedError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
private apiUrl= 'http://localhost:3000/api/upload';

  constructor(private http: HttpClient) { }

  uploadImage(file:File):Observable<any>{
    const formData= new FormData();
    formData.append('image', file);

    return this.http.post(this.apiUrl, formData);


  }
}
