import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Article } from './models/article.interface';
import { environment } from 'src/environments/environment';
import { Articles } from './models/articles.interface';
import { Filters } from './models/filters.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArticles(searchTerm?: string, filters?: Filters): Observable<Article[]> {

    const defaultParams = new HttpParams()
      .set('q', `${searchTerm ? `${searchTerm}` : 'sports'}`)

    const filterParams = new HttpParams()
      .set('q', `${searchTerm?.length ? searchTerm : filters?.categories[0]}`)
      .set('startDate', `${filters?.startDate}`)
      .set('endDate', `${filters?.endDate}`)

    const params = filters ? filterParams : defaultParams;

    return this.http.get<Articles>(this.apiUrl, {
      headers: new HttpHeaders({
        'x-api-key': `${environment.apiKey}`
      }),
      params,
    }).pipe(
      map(response => {
        return response.articles.map((article: Article) => article);
      })
    );
  }
}
