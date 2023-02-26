import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  public articles: Article[];
  public filteredArticles: Article[];

  constructor(private articlesService: ArticlesService) {
    this.articles = [];
    this.filteredArticles = [];
  }

  makeRequest() {
    this.articlesService.getArticles().subscribe(articles => {
      console.log('articles:', articles)
      this.articles = articles;
      this.filteredArticles = articles;
    });
  }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(articles => {
      console.log('articles:', articles)
      this.articles = articles;
      this.filteredArticles = articles;
    });
  }

  onFilterChanged(filters: any) {
    // TODO: defines filters interface
  }
}
