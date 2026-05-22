import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'xs-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Tutors', route: '/tutors' },
    { label: 'Pathway', route: '/pathway' },
  ];
}
