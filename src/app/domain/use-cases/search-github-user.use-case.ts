import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

@Injectable({ providedIn: 'root' })
export class SearchGithubUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(username: string): Observable<User> {
    const cleanUsername = username.trim();
    if (!cleanUsername) {
      return throwError(() => new Error('El nombre de usuario es obligatorio.'));
    }
    return this.userRepository.getUserByUsername(cleanUsername);
  }
}