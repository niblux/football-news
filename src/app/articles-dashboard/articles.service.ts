import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Article } from './models/article.interface';
import { environment } from 'src/environments/environment';
import { Articles } from './models/articles.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Articles>(this.apiUrl, {
      headers: new HttpHeaders({
        'x-api-key': `${environment.apiKey}`
      })
    }).pipe(
      map(response => {
        const articles = response.articles.map((article: Article) => {
          return article
        });
        return articles;
      })
    );
  }
}
