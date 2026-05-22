import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '@shared/components/contact-footer/contact-footer.component';

@Component({
  selector: 'xs-main-page-content',
  standalone: true,
  imports: [RouterLink, ContactFooterComponent],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent {}
