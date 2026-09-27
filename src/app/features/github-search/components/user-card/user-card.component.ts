import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../domain/models/user.model';
import { FormatNumberPipe } from '../../../../shared/pipes/format-number.pipe';
import { FormatDatePipe } from '../../../../shared/pipes/format-date.pipe';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormatNumberPipe, FormatDatePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
}