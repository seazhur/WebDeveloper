import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  myProjects = [
    {
      version: 1,
      name: 'Spotify Arcade',
      description:
        'Lets friends compete with each other to guess who knows each others music tastes the best.',
      url: 'https://spotify.com/',
      image1: '/assets/spotify1.png',
      image2: '/assets/spotify2.png',
    },
    {
      version: 1,
      name: 'Spotify Arcade',
      description:
        'Lets friends compete with each other to guess who knows each others music tastes the best.',
      url: 'https://spotify.com/',
      image1: '/assets/spotify1.png',
      image2: '/assets/spotify2.png',
    },
  ];
}
