import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  protected get( query : DocumentNode, variables : object = {}, context: object = {} ){
    return this.apollo.watchQuery({
      query,
      variables,
      context,
      fetchPolicy: 'cache-and-network'
    })
    .valueChanges
    .pipe(map(res => { return res.data }))
  }

}
