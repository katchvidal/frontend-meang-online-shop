import { map, Subject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { GET_LOGIN } from '@graphql/operations/queries/signIn.query';
import { AUTH_ME } from '@graphql/operations/queries/authorization.query';
import { IAuthMeResponse, ISession } from '@core/interfaces/session.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  
  accessVar = new Subject<IAuthMeResponse>();
  accessVar$ = this.accessVar.asObservable();

  constructor(apollo: Apollo) {
    super(apollo)
  }

  signIn(email: string, password: string) {
    return this.get(GET_LOGIN, { email, password, include: false })
      .pipe(map((res: any) => { return res.signin }))
  }

  getMe() {
    return this.get(AUTH_ME, { include: false }, {
      headers: new HttpHeaders({
        Authorization: (this.getSession() as ISession ).token!
      })
    })
      .pipe(map((res: any) => { return res.auth }))
  }

  /*
  * Serie de funciones que nos ayudaran a gestionar el estado de usuario con session active o no!
  */

  setSession( token : string , expiresInHours = 24, user : any ){
    const date = new Date();
    date.setHours( date.getHours() + expiresInHours )
    const session : ISession = {
      expiresIn : new Date( date ).toISOString(),
      token,
      user
    }
    localStorage.setItem('session', JSON.stringify(session) )
    // console.log('Inicio de Session:', session );
  }

  getSession() : ISession {
    return JSON.parse(localStorage.getItem('session')!)
  }

  verifySession(){
    if ( this.getSession() !== null ){
      this.getMe().subscribe( (res : IAuthMeResponse ) => {
        if ( !res.status ){
          this.resetSession();
          return;
        }
        this.updateSession( res )
      });
      // console.log('Session Active')
      return;
    }
    this.updateSession({ status: false, })
    // console.log('Session Not Active')
  }

  resetSession(){
    localStorage.removeItem('session');
    this.updateSession({ status: false });
  }

  updateSession( newValue : IAuthMeResponse ){
    this.accessVar.next( newValue )
  }

  closeSession(){
    return this.resetSession();
  }

}
