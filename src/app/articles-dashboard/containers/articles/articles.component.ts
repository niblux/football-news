import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../models/article.interface';
import { Filters } from '../../models/filters.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  public articles: Article[];
  public articles$: Observable<Article[]>;
  public filteredArticles: Article[];
  public categories: string[];
  public searchTerm: string;

  constructor(private articlesService: ArticlesService) {
    this.articles = [];
    this.filteredArticles = [];
    this.categories = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology"
    ]
    this.searchTerm = '';
    this.articles$ = this.loadArticles();
  }

  onFilterChanged(filters: Filters) {
    this.articles$ = this.loadArticles('', filters);
  }

  onSearchNews(searchTerm$: Observable<string>) {
    searchTerm$.pipe(switchMap((searchTerm: string) => this.loadArticles(searchTerm))).subscribe((articles) => this.articles$ = of(articles));
  }

  private loadArticles(search?: string, filters?: Filters): Observable<Article[]> {
    return this.articlesService.getArticles(search, filters);
  }

}
