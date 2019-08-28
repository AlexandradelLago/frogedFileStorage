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

  downloadFile(id : String) {
    // form es un objeto interno de la instancia FileUploader
 
          console.log("archivo bajado");

    };

  deleteFile(id :String) {
      console.log(id);
      this.fileS.deleteFile(id)
      .subscribe((list)=>{
        //this.fileList = list;
    })

  }
  
   
}
