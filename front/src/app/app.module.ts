import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilelistComponent } from './components/filelist/filelist.component';
import { FormNewFileComponent } from './components/upload-file/upload-file.component';
import { SingleFileComponent } from './components/single-file/single-file.component';

import { FileService } from './services/file.service';

const routes: Routes  = [
  {path: 'files', component: FilelistComponent},
  {path: 'files/new', component: FormNewFileComponent},
  {path: 'files/:id', component: SingleFileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FilelistComponent,
    FormNewFileComponent,
    SingleFileComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
