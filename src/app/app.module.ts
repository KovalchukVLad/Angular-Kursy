import { NgModule } from '@angular/core';
import {routes} from "./routes/routes";
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import {CustomInterceptorService} from "./services/custom-interceptor.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularMoviesComponent,
    PopularMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
