import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })

export class HeroesService {
  private baseURL: string = environments.baseURL;

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined>{
    return this.httpClient.get<Hero>(`${this.baseURL}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes?q=${query}`);
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(`${this.baseURL}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero>{
    if (!hero.id) throw Error('Hero ID is required');
    return this.httpClient.put<Hero>(`${this.baseURL}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean>{
    return this.httpClient.delete(`${this.baseURL}/heroes`)
      .pipe(
        catchError(er => of(false)),
        map(resp => true)
      );
  }
}
