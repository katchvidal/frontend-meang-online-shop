import { map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { GET_LOGIN } from '@graphql/operations/queries/signIn.query';
import { AUTH_ME } from '@graphql/operations/queries/authorization.query';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo)
  }

  signIn(email: string, password: string) {
    return this.get(GET_LOGIN, { email, password })
      .pipe(map((res: any) => { return res.signin }))
  }

  getMe() {
    return this.get(AUTH_ME, { include: false }, {
      headers: new HttpHeaders({
        Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7Il9pZCI6IjYyNjMwODU0YzRkM2Y0NGVjNjkzY2I3OSIsIm5hbWUiOiJLeW9jZXJhIiwibGFzdG5hbWUiOiJWaWRhbCIsImVtYWlsIjoia2lhQGNvcnJlby5jb20iLCJiaXJ0aERheSI6IjIxLTAxLTAxIiwicm9sZSI6IkFETUlOIiwiYWN0aXZlIjp0cnVlLCJjcmVhdGVBdCI6IjIwMjItMDQtMjJUMTk6NTY6MDQuODYyWiJ9LCJpYXQiOjE2NTc1ODU5NzcsImV4cCI6MTY1NzY3MjM3N30.VTZ-cGv1dOiAsotBqC18wq2FAsxMVOT1qwIUAIbK0yR9Mjk7o0uRcpxTaUUfje-gLb21Z4SvvIRGlJ1djqljDw'
      })
    })
      .pipe(map((res: any) => { return res.auth }))
  }
}
