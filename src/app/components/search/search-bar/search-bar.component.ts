import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ComicVineService} from "../../../services/comic-vine.service";
import {Character} from "../../../models/character.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchTerm: string = '';
  isLoading: boolean = false;

  @Output() charactersFound = new EventEmitter<Character[]>();

  constructor(private comicVineService: ComicVineService) {}

  onSearchClick(): void {
    if (this.searchTerm.trim()) {
      this.isLoading = true;
      this.comicVineService.getCharacters(this.searchTerm).subscribe((characters: Character[]) => {
        this.charactersFound.emit(characters);
        this.isLoading = false;
      });
    } else {
      this.charactersFound.emit([]);
    }
  }
}
