import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../../../amplify/data/resource';
import { Toast } from 'primeng/toast';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { NgClass } from '@angular/common';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'xs-contact-footer',
  standalone: true,
  imports: [ReactiveFormsModule, Toast, InputText, Textarea, Message, NgClass, Checkbox],
  templateUrl: './contact-footer.component.html',
  styleUrl: './contact-footer.component.scss',
  providers: [MessageService],
})
export class ContactFooterComponent {
  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  readonly levelOfStudyOptions = [
    { label: 'High School', value: 'highSchool' },
    { label: 'Junior High', value: 'juniorHigh' },
    { label: 'College Applications', value: 'collegeApplications' },
  ];

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    levelOfStudy: [[]],
    message: [''],
  });

  client = generateClient<Schema>();

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.popMessage('error', 'Please fill in the required fields');
      return;
    }
    try {
      const v = this.form.value;
      const params = {
        name: `${v.firstName} ${v.lastName}`.trim(),
        subjects: JSON.stringify(v.levelOfStudy ?? []),
        wechat: '',
        phone: v.phone ?? '',
        email: v.email,
        message: v.message ?? '',
      };
      await this.sendEmail(params);
      await this.addMessage(params);
      this.popMessage('success', 'Your message has been sent, we will contact you soon');
      this.form.reset();
    } catch (error) {
      this.popMessage('error', String(error));
    }
  }

  private async addMessage(params: Record<string, string>) {
    const { errors } = await this.client.models.ConsultMessage.create({
      ...params,
      timestamp: new Date().toISOString(),
      done: false,
    });
    if (errors) throw new Error(errors[0].message);
  }

  private async sendEmail(params: Record<string, string>) {
    const { errors } = await this.client.queries.sendEmail({ params });
    if (errors) throw new Error(errors[0].message);
  }

  private popMessage(severity: 'success' | 'error', detail: string) {
    this.messageService.add({ severity, summary: severity === 'success' ? 'Success' : 'Error', detail });
  }
}
