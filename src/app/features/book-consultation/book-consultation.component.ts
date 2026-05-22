import { Component } from '@angular/core';
import { ContactFooterComponent } from '@shared/components/contact-footer/contact-footer.component';

@Component({
  selector: 'xs-book-consultation',
  standalone: true,
  imports: [ContactFooterComponent],
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss',
})
export class BookConsultationComponent {
  readonly sections = [
    {
      number: '1',
      title: 'Who This is For',
      paragraphs: [
        'For students and families considering applications to Oxbridge and other leading universities.',
        'Whether you are at an early stage or already preparing for admissions tests and interviews, the consultation provides a clearer sense of direction.',
      ],
    },
    {
      number: '2',
      title: 'What to Expect',
      paragraphs: [
        'Each consultation is tailored, but typically includes a discussion of your current academic stage, subject interests, and long-term goals.',
        'We will look at how your preparation can be structured, identify key priorities, and clarify what matters most for you. The focus is on building a realistic and well-informed understanding of the path ahead.',
      ],
    },
    {
      number: '3',
      title: 'What You Will Gain',
      paragraphs: [
        'A clearer view of your current position and what is required at the next stage.',
        'A structured outline of how preparation can be approached, based on your individual goals.',
        'Guidance on practical next steps, whether immediate or longer-term.',
      ],
    },
    {
      number: '4',
      title: 'How It Works',
      paragraphs: [
        'Consultations are conducted online and typically last 30–45 minutes.',
        'To arrange a conversation, you can leave a message through the contact page with a brief outline of your current situation. We will then follow up to arrange a suitable time.',
      ],
    },
  ];
}
