import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-form-new-file',
  templateUrl: './form-new-file.component.html',
  styleUrls: ['./form-new-file.component.css']
})
export class FormNewFileComponent implements OnInit {

  // url is the path of where the file is going to be uploaded
  uploader: FileUploader = new FileUploader({
      url: this.fileS.upload
  });

  constructor(private fileS: FileService, private route: Router) { }

  ngOnInit() {
  }

  submit() {
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['files']);
  }

}
