import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FbAuthResponse, User } from '../../../shared/interfaces';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) { }
  $error: Subject<string> = new Subject<string>()

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'))

    if (new Date() > expDate) {
      this.logout()

      return null
    }

    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;
    console.log(message)
    switch (message) {
      case "INVALID_EMAIL":
        this.$error.next("Неверный email")
        break
      case "INVALID_PASSWORD":
        this.$error.next("Неверный password")
        break
      case "EMAIL_NOT_FOUND":
        this.$error.next("Email не найден")
        break
    }

  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}



