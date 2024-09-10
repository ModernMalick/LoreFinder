import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Character} from "../../models/character.model";

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
