import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFooterComponent } from '@shared/components/contact-footer/contact-footer.component';

type YearKey = 'year10' | 'year11' | 'year12' | 'year13';

interface HelpItem { title: string; desc: string; }
interface YearContent {
  label: string;
  key: YearKey;
  studentsFace: string[];
  howWeHelp: HelpItem[];
}

@Component({
  selector: 'xs-pathway',
  standalone: true,
  imports: [RouterLink, ContactFooterComponent],
  templateUrl: './pathway.component.html',
  styleUrl: './pathway.component.scss',
})
export class PathwayComponent {
  activeYear = signal<YearKey>('year10');

  readonly years: YearContent[] = [
    {
      label: 'Year 10',
      key: 'year10',
      studentsFace: [
        'Transition into more demanding academic study and stronger independent learning expectations.',
        'Increasing emphasis on mathematics and science subjects.',
        'Early exploration of future academic pathways.',
      ],
      howWeHelp: [
        { title: 'Academic Planning', desc: 'Guidance on subject development and long-term academic planning tailored to each student.' },
        { title: 'Academic Foundations Preparation', desc: 'Structured thinking designed to strengthen long-term academic foundations in mathematics and sciences.' },
      ],
    },
    {
      label: 'Year 11',
      key: 'year11',
      studentsFace: [
        'Academic difficulty increases and begins to shape future university options.',
        'Increasing emphasis on super-curricular development and independent academic exploration.',
        'Preparation for admissions tests such as ESAT and TMUA begins.',
      ],
      howWeHelp: [
        { title: 'Personalised Guidance', desc: 'Personalised guidance on subject selection and long-term preparation strategy.' },
        { title: 'Super-Curriculars & Personal Statement Programme', desc: 'Academic reading, discussion, and structured preparation for applications and interviews.' },
        { title: 'Admissions Test Preparation', desc: 'Focused preparation for ESAT, TMUA, and related assessments through structured problem-solving and conceptual training.' },
      ],
    },
    {
      label: 'Year 12',
      key: 'year12',
      studentsFace: [
        'Formal preparation for Oxbridge and other top university applications begins.',
        'Competition season intensifies — BMO, BPhO, STEP, and UKCSQ.',
        'Personal Statement writing and super-curricular development become priorities.',
      ],
      howWeHelp: [
        { title: 'Competition Training', desc: 'Structured preparation for STEP, BMO, BPhO, UKCSQ, and other academic competitions (40 hours, August–November).' },
        { title: 'Super-Curriculars & Personal Statement', desc: 'Based on the Oxbridge super-curricular approach: bridge the gap to university-level thinking while drafting a compelling Personal Statement (30 hours, January–June).' },
        { title: 'Admissions Test Preparation', desc: 'Establish a robust academic framework and clear problem-solving logic specifically for ESAT and TMUA (January–June).' },
      ],
    },
    {
      label: 'Year 13',
      key: 'year13',
      studentsFace: [
        '15 October: UCAS deadline for Oxbridge.',
        'October–November: Admissions test sittings (ESAT, TMUA, etc.).',
        'December–March: Main and secondary interview cycles (Oxford/Cambridge/Imperial).',
      ],
      howWeHelp: [
        { title: 'Admissions Test Intensive', desc: 'Focused training on exam technique, accuracy, and time management for ESAT and TMUA.' },
        { title: 'Interview Strategy & Logical Frameworks', desc: '20 hours of interview strategy and logical frameworks based on the Oxbridge format (August–October).' },
        { title: 'Mock Interviews', desc: '20 hours of intensive practice with 100+ authentic interview questions based on the Oxbridge format (October–December).' },
      ],
    },
  ];

  get activeContent(): YearContent {
    return this.years.find(y => y.key === this.activeYear())!;
  }

  setYear(key: YearKey) {
    this.activeYear.set(key);
  }
}
