import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FileService {

  constructor(private http: Http) { }

  getAllFile() {
    return this.http.get('http://localhost:3000/file/all')
      .map(res => res.json());
  }
  sendNewFile(file) {
    return this.http.post('http://localhost:3000/file/new', file)
      .map(res => res.json());
  }
  getSingleFile(id) {
    return this.http.get(`http://localhost:3000/file/${id}`)
    .map(res => res.json());
  }
}
