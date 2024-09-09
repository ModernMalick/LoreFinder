import { Component } from '@angular/core';
import {CharacterCardComponent} from "../character-card/character-card.component";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CharacterCardComponent
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

}
