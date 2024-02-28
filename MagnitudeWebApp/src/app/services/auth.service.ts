import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;
  private jwtHelper = new JwtHelperService();
 
  login(username: string, password: string) {
    const requestData = { Email: username, Password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, requestData).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('access_token', response.token);
          localStorage.setItem('email', response.email);
        }
      },(err:HttpErrorResponse)=>{alert("Invalid username & password")})
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    localStorage.clear();
  }
}
