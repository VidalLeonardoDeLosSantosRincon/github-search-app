import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from '../../../../domain/models/repository.model';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css'
})
export class RepoListComponent {
  @Input({ required: true }) repos: Repository[] = [];
}