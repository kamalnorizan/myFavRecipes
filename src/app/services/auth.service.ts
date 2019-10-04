import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) { }

  login(email: string, password: string) {
    return this.http.post(this.env.API_URL + 'auth/login',
      { email, password }
    ).pipe(
      tap(
        token => {
          this.storage.setItem('token', token)
            .then(
              () => {
                console.log('BERJAYA!!');
              },
              error => console.error('Error login', error)
            );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        }
      ),
    );
  }

  register(fName: string, lName: string, email: string, password: string) {
    return this.http.post(this.env.API_URL + 'auth/register',
      { fName, lName, email, password }
    );
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}// eof
