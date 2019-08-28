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

  // por defecto hace una llamada post a nuestro back-end
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/file/new`
  });


  constructor(private phoneS: FileService, private route: Router) { }

  ngOnInit() {
  }
  submitForm(newForm) {
    // form es un objeto interno de la instancia FileUploader
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', newForm.value.name);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['files']);
  }

}
