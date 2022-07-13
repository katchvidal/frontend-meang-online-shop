import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@core/services/public/auth.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor( private authService : AuthService, private router : Router ){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // Comprobar que existe session
      if ( this.authService.getSession() !== null ){ 
        // Comprobar que el token no este caducado o mal generado
        const dataDecode : any = this.decodeToken();
        if ( dataDecode.exp < (new Date().getTime() / 1000) ){
          console.log('Token Expirado')
          return this.redirect();
        }
        // Comprobar que tiene permisos de administracion
        if ( dataDecode.User.role !== "ADMIN"){
          console.log('No es un Administrador')
          return this.redirect();
        }
        console.log('Es un Administrador y Token Valido')
        return true;
      }
    console.log('Session not Active')
    return this.redirect();
  }

  decodeToken(){
    return jwtDecode( this.authService.getSession().token || '' )
  }

  redirect(){
    this.router.navigate(['/signin'])
    return false;
  }
  
}
