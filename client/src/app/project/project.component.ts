import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() url: string;
  @Input() images: string[];
  @Input() version: string;

  // TODO: remove
  open(url: string) {
    // the url,html tag should be called from here , how ?
    window.open(url);
  }
}
