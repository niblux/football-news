import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  @Output() articles = new EventEmitter<Article[]>();

  searchTerm: FormControl;


  constructor(private articlesService: ArticlesService) {
    this.searchTerm = new FormControl();
  }

  onSearchTerm(): void {
    this.searchTerm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => {
        return this.articlesService.getArticles(searchTerm)
      })
    ).subscribe((articles: Article[]) => {
      this.articles.emit(articles);
    });
  }
}
