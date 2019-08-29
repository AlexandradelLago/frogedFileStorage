import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {

  fileList: Array<Object>;
  imageURL: String = 'http://localhost:3000/uploads/';
  constructor(private fileS: FileService) { }

  ngOnInit() {
    this.updateList();
  }

  downloadFile(url: String) {
    this.fileS.downloadFile(url).
      subscribe(res => {
        console.log('archivo bajado');
      });
  }

  deleteFile(id: String) {
    this.fileS.deleteFile(id).subscribe(() =>this.updateList());
  }

  updateList(){
    this.fileS.getAllFile().subscribe(files => this.fileList = files);
  }

}
