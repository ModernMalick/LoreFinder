import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ComicVineService {
  private proxyUrl = 'https://corsproxy.io/?';  // Base proxy URL
  private apiUrl = 'https://comicvine.gamespot.com/api/characters/';  // Comic Vine base URL

  constructor(private http: HttpClient) {}

  getCharacters(searchTerm: string): Observable<Character[]> {
    const fullUrl = `${this.proxyUrl}${this.apiUrl}?api_key=4bb7ba3c9cb7e051dadbcc6dcf4f5de58295f2b3&filter=name:${encodeURIComponent(searchTerm)}&format=json&field_list=name,publisher,real_name,image`;

    return this.http.get<any>(fullUrl).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.map((item: any) => new Character(
            item.name,
            item.publisher ? item.publisher.name : 'Unknown',
            item.real_name || 'Unknown',
            item.image ? item.image.small_url : '../../../assets/images/character_thumbnail.png'
          ));
        } else {
          return [];
        }
      })
    );
  }
}
