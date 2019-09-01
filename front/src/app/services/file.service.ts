import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const apiURL = `${environment.baseURL}/file`;

@Injectable()
export class FileService {
  upload = `${apiURL}/upload`;

  constructor(private http: HttpClient ) { }

  getAllFile(): Observable<any> {
    return this.http.get(`${apiURL}/all`)
      .map(res => res);
  }

  getSingleFile(id: String): Observable<any> {
    return this.http.get(`${apiURL}/${id}`)
    .map(res => res);
  }



  // Usage of blob response type to download files and pasing the filename in the body
  downloadFile(filename) {
    return this.http.post(`${apiURL}/download`, {filename}, {responseType: 'blob'});
}

  deleteFile (id: String): Observable<any> {
    return this.http.delete(`${apiURL}/delete/${id}`)
    .map(res => res);
  }
}
