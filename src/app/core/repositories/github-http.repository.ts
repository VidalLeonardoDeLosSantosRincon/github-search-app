import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/models/user.model';
import { Repository } from '../../domain/models/repository.model';

@Injectable({ providedIn: 'root' })
export class GithubHttpRepository implements UserRepository {
  private readonly apiUrl = environment.githubApiUrl;

  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${username}`);
  }

  getUserRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/${username}/repos`);
  }
}