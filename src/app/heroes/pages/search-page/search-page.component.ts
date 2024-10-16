import { Hero } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchHeroInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroesService:HeroesService){}
  searchHero() {
    const value: string = this.searchHeroInput.value || '';

    this.heroesService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    const selectedHero: Hero = event.option.value as Hero;
    if (!selectedHero) {
      this.selectedHero = undefined;
      return;
    }
    this.searchHeroInput.setValue(selectedHero.superhero || '');
    this.selectedHero = selectedHero;
  }

}
