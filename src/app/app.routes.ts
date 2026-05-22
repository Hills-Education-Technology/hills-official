import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/main-page/main-page-content/main-page-content.component').then(
        m => m.MainPageContentComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about-us/about-us.component').then(m => m.AboutUsComponent),
  },
  {
    path: 'tutors',
    loadComponent: () =>
      import('./features/tutors/tutors.component').then(m => m.TutorsComponent),
  },
  {
    path: 'pathway',
    loadComponent: () =>
      import('./features/pathway/pathway.component').then(m => m.PathwayComponent),
  },
  {
    path: 'book-a-consultation',
    loadComponent: () =>
      import('./features/book-consultation/book-consultation.component').then(
        m => m.BookConsultationComponent
      ),
  },
  { path: 'about-us', redirectTo: '/about', pathMatch: 'full' },
  { path: 'contact-us', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
