import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchGithubUserUseCase } from '../../../../domain/use-cases/search-github-user.use-case';
import { GetUserReposUseCase } from '../../../../domain/use-cases/get-user-repos.use-case';
import { User } from '../../../../domain/models/user.model';
import { Repository } from '../../../../domain/models/repository.model';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RepoListComponent } from '../../components/repo-list/repo-list.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCardComponent, RepoListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  username = '';
  user: User | null = null;
  repos: Repository[] = [];
  errorMessage = '';

  constructor(
    private searchGithubUserUseCase: SearchGithubUserUseCase,
    private getUserReposUseCase: GetUserReposUseCase
  ) {}

  onSearch() {
    this.errorMessage = '';
    this.user = null;
    this.repos = [];

    this.searchGithubUserUseCase.execute(this.username).subscribe({
      next: (userData) => {
        this.user = userData;
        this.loadRepos();
      },
      error: (err) => (this.errorMessage = err.message || 'Usuario no encontrado')
    });
  }

  private loadRepos() {
    this.getUserReposUseCase.execute(this.username).subscribe({
      next: (reposData) => (this.repos = reposData.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()))
    });
  }
}