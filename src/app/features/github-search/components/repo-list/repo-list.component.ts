import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from '../../../../domain/models/repository.model';
import { FormatDatePipe } from '../../../../shared/pipes/format-date.pipe';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css'
})
export class RepoListComponent {
  @Input({ required: true }) repos: Repository[] = [];
}