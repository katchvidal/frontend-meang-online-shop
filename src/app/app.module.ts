import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from '@graphql/modules/graphql.module';
import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    AdminModule,
    PublicModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
