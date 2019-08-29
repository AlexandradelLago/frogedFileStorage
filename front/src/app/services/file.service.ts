import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const apiURL : String = `${environment.baseURL}/file`;

@Injectable()
export class FileService {
  upload : string = `${apiURL}/upload`;
  constructor(private http: Http) { }

  getAllFile():Observable<any> {
    return this.http.get(`${apiURL}/all`)
      .map(res => res.json());
  }

  sendNewFile(file : Object):Observable<any> {
    return this.http.post(`${apiURL}/upload`, file)
      .map(res => res.json());
  }

  getSingleFile(id : String):Observable<any> {
    return this.http.get(`${apiURL}/${id}`)
    .map(res => res.json());
  }

  downloadFile (id:String ):Observable<any>{
    return this.http.get(`${apiURL}/download/${id}`)
    .map(res => res.json());
  }

  deleteFile (id : String):Observable<any> {
    return this.http.put(`${apiURL}/delete/${id}`, id)
    .map(res => res.json());
  }
}
