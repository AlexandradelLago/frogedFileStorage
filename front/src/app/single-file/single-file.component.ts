import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-single-file',
  templateUrl: './single-file.component.html',
  styleUrls: ['./single-file.component.css']
})

export class SingleFileComponent implements OnInit {
  single: any;
  constructor(private activateRouter: ActivatedRoute, private fileS: FileService) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.fileS.getSingleFile(params['id'])
        .subscribe(singleFile => this.single = singleFile);
    });
  }

}
