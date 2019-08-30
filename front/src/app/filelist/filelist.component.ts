import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import {saveAs as importedSaveAs} from 'file-saver';

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

  downloadFile(fileName: string) {
    this.fileS.downloadFile(fileName).
      subscribe(blob =>  importedSaveAs(blob, fileName)
    );
  }

  deleteFile(id: String) {
    this.fileS.deleteFile(id).subscribe(() => this.updateList());
  }

  updateList(){
    this.fileS.getAllFile().subscribe(files => this.fileList = files);
  }

}
