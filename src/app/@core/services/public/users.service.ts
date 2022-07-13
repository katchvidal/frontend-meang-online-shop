import { Injectable } from '@angular/core';
import { GET_USERS } from '@graphql/operations/queries/users.query';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor( apollo : Apollo ) {
    super( apollo ) 
   }

   getUsers(){
    return this.get( GET_USERS, { include : true })
    .pipe(map((res: any) => { return res.users }))
   }
}
