import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from "./character/character.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jikan-moe-angular-app';
  character = {
    id: 117223,
    image_url:
      'https://cdn.myanimelist.net/images/characters/14/282523.jpg?s=24491d31a89bbbce864c41b7e69943a9',
    name: 'Aqua',
  };
}
