import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './containers/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from './articles.service';





@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule { }
