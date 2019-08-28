import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
fileList: Array<Object>;
  constructor(private fileS: FileService) { }
  ngOnInit() {
    this.fileS.getAllFile()
      .subscribe(respuesta => {
        console.log(respuesta);
        this.fileList = respuesta;
      });
  }
}
