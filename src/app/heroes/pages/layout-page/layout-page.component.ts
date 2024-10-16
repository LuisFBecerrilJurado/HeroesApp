import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'List Hero', icon: 'list', url: './list' },
    { label: 'Search Hero', icon: 'search', url: './search'},
    { label: 'Add Hero', icon: 'add', url: './newHero' }
  ]
}
