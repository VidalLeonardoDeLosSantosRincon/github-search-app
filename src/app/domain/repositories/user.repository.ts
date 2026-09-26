import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repository } from '../models/repository.model';

export abstract class UserRepository {
  abstract getUserByUsername(username: string): Observable<User>;
  abstract getUserRepos(username: string): Observable<Repository[]>;
}