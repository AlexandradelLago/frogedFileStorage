import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const apiURL = `${environment.baseURL}/file`;

@Injectable()
export class FileService {
  upload = `${apiURL}/upload`;

  constructor(private http: Http ) { }

  getAllFile():Observable<any> {
    return this.http.get(`${apiURL}/all`)
      .map(res => res.json());
  }

  getSingleFile(id: String): Observable<any> {
    return this.http.get(`${apiURL}/${id}`)
    .map(res => res.json());
  }

  downloadFile (filename: String ): Observable<any> {
    console.log(`${apiURL}/download/${filename}`);
    return this.http.get(`${apiURL}/download/${filename}`)
    .map(res => res.json());
  }

  deleteFile (id: String): Observable<any> {
    return this.http.put(`${apiURL}/delete/${id}`, id)
    .map(res => res.json());
  }
}
