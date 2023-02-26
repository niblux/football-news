import { Component } from '@angular/core';
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

  ngOnInit() {
    this.articlesService.getArticles().subscribe(articles => {
      console.log('articles:', articles)
      this.articles = articles;
    });
  }

  onFilterChanged(filters: any) {
    // TODO: defines filters interface
  }

  onSearchNews(articles: Article[]) {
    this.articles = articles;
  }
}
