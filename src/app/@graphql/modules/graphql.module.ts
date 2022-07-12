// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Apollo } from 'apollo-angular';
// import { HttpLink } from '@apollo/client';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class GraphqlModule { 
//   constructor( apollo : Apollo, httpLink: HttpLink ) {}
// }
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
const uri = 'http://localhost:8000/graphql'; 
// AQUI CAPTURAMOS LOS ERRORES JUNTO CON LA CONFIGURACIÓN
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Errors', graphQLErrors);
    }
 
    if (networkError) {
      console.log('Network Errors', networkError);
    }
  });
  const link = ApolloLink.from([errorLink, httpLink.create({ uri })]);
  return {
    link,
    cache: new InMemoryCache(),
  };
}
 
@NgModule({
  imports: [BrowserModule, ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo, // Añadimos configuración APollo
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
