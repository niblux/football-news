import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './articles-dashboard/components/article/article.component';
import { FiltersComponent } from './articles-dashboard/components/filters/filters.component';
import { ArticlesComponent } from './articles-dashboard/containers/articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
