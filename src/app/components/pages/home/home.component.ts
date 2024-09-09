import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SearchBarComponent} from "../../search-bar/search-bar.component";
import {CharacterCardComponent} from "../../character-card/character-card.component";
import {SearchResultsComponent} from "../../search-results/search-results.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SearchBarComponent,
    CharacterCardComponent,
    SearchResultsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
