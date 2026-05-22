import { Component } from '@angular/core';
import { ContactFooterComponent } from '@shared/components/contact-footer/contact-footer.component';

@Component({
  selector: 'xs-tutors',
  standalone: true,
  imports: [ContactFooterComponent],
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.scss',
})
export class TutorsComponent {
  readonly tutors = [
    {
      name: 'Dr. Kevin Chen',
      subject: 'Engineering Science',
      university: 'University of Oxford',
      badge: '/images/logo_oxi.png',
      bio: 'Founder of Hills and Head of the Physics and Engineering Division. Holds an MEng in Engineering Science and DPhil in Solid Mechanics and Applied Mathematics from the University of Oxford. Former admissions test marker with nearly ten years of Oxbridge preparation experience, having guided over 100 students to Oxford and Cambridge offers.',
    },
    {
      name: 'Ali H.',
      subject: 'Economics',
      university: 'University of Cambridge',
      badge: '/images/logo_cam.png',
      bio: 'Trusted Economist and previously worked at a leading education institution where he developed economics teaching materials and curriculum content. His teaching focuses on conceptual clarity, structured argument, and independent economic reasoning, particularly in preparation for competitive Economics applications.',
    },
    {
      name: 'Tianchu W.',
      subject: 'Mathematics',
      university: 'University of Oxford',
      badge: '/images/logo_oxi.png',
      bio: 'Studies Mathematics at Keble College, Oxford, and achieved an outstanding score in the MAT admissions test. Experienced in preparing students for MAT, STEP, and university interviews, with teaching across A-level Mathematics and Further Mathematics. Her approach emphasises structured reasoning, careful exploration, and mathematical problem-solving tailored to individual students.',
    },
    {
      name: 'Eva F.',
      subject: 'Natural Sciences (Biology)',
      university: 'University of Cambridge',
      badge: '/images/logo_cam.png',
      bio: 'Currently pursuing an MSc in Natural Sciences at Cambridge, with academic focus across Chemistry, Biology, Mathematics, and computational methods. Since 2021, she has taught GCSE and A-Level Mathematics and Natural Sciences, helping students develop strong academic foundations alongside deep conceptual understanding in Mathematics and the Sciences.',
    },
  ];
}
