import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Repository } from '../models/repository.model';
import { UserRepository } from '../repositories/user.repository';

@Injectable({ providedIn: 'root' })
export class GetUserReposUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(username: string): Observable<Repository[]> {
    const cleanUsername = username.trim();
    if (!cleanUsername) {
      return throwError(() => new Error('El nombre de usuario es obligatorio.'));
    }
    return this.userRepository.getUserRepos(cleanUsername);
  }
}