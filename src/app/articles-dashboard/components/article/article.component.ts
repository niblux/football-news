import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input()
  article!: Article;

  @Input() imageUrl = `https://picsum.photos/seed/${this.article?.source}/254/145`

  constructor() {

  }
}
