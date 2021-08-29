import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../interface/auth.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUri = environment.ApiUri;
  private logger = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  register() {}
  login(usuario: string, password: string): Observable<usuario[]> {
    return this.http
      .get<usuario[]>(this.apiUri, {
        params: {
          usuario,
          password,
        },
      })
      .pipe(
        tap((resp) => {
          if (resp.length > 0) this.logger.next(true);
        }),
        tap((auth) => localStorage.setItem('token', auth[0].usuario))
      );
  }
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }
}
