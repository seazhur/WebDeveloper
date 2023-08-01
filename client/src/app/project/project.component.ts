import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() version: string;
  @Input() type: string;
  @Input() name: string;
  @Input() url: string;
  @Input() comments: string[];
  @Input() images: string[];

  open(url: string) {
    // the url,html tag should be called from here , how ?
    window.open(url);
  }
}