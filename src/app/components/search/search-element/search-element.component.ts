import { Component } from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {SearchResultsComponent} from "../search-results/search-results.component";
import {Character} from "../../../models/character.model";

@Component({
  selector: 'app-search-element',
  standalone: true,
  imports: [
    SearchBarComponent,
    SearchResultsComponent
  ],
  templateUrl: './search-element.component.html',
  styleUrl: './search-element.component.scss'
})
export class SearchElementComponent {
  characters: Character[] = [];

  onCharactersFound(characters: Character[]): void {
    this.characters = characters;
  }
}
