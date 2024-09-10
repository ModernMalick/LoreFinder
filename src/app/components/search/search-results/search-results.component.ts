import {Component, Input} from '@angular/core';
import {CharacterCardComponent} from "../../character-card/character-card.component";
import {Character} from "../../../models/character.model";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CharacterCardComponent,
    NgForOf,
    NgStyle
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  @Input() characters: Character[] = [];
}
