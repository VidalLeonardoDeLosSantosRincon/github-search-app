import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadComponent: () =>
      import('./features/github-search/pages/search-page/search-page.component').then(
        (m) => m.SearchPageComponent
      )
  },
  { path: '**', redirectTo: 'search' }
];