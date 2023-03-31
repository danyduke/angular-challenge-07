import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/models/developer.model';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developer: Developer;

  constructor() {
    this.developer = new Developer(
      'Doe',
      'John',
      30,
      'male',
      "Hello I'm John the dev",
      [
        new Skill(
          'Angular',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png',
          'https://angular.io/'
        ),
        new Skill(
          'Java',
          'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg',
          'https://www.java.com/fr/'
        ),
      ]
    );
  }

  ngOnInit() {}
}
