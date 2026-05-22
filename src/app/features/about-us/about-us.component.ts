import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '@shared/components/contact-footer/contact-footer.component';

@Component({
  selector: 'xs-about-us',
  standalone: true,
  imports: [RouterLink, ContactFooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
