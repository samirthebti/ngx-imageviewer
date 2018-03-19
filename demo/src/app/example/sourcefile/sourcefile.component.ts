import { Component } from '@angular/core';

@Component({
  selector: 'app-sourcefile',
  templateUrl: './sourcefile.component.html',
  styleUrls: ['./sourcefile.component.scss']
})
export class SourceFileComponent {
  docFile: File;

  constructor() { }
}
