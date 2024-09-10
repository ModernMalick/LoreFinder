import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SearchBarComponent} from "../../search/search-bar/search-bar.component";
import {CharacterCardComponent} from "../../character-card/character-card.component";
import {SearchResultsComponent} from "../../search/search-results/search-results.component";
import {SearchElementComponent} from "../../search/search-element/search-element.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SearchBarComponent,
    CharacterCardComponent,
    SearchResultsComponent,
    SearchElementComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
