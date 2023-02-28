import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../models/article.interface';
import { Filters } from '../../models/filters.interface';
import { ArticlesComponent } from './articles.component';
import { addMatchers, initTestScheduler } from 'jasmine-marbles';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let articlesServiceSpy: jasmine.SpyObj<ArticlesService>;
  let articlesSubject: Subject<Article[]>;
  const filters: Filters = { categories: ['sports'], startDate: '2022-02-01', endDate: '2022-02-28' }

  beforeEach(waitForAsync(() => {
    articlesSubject = new Subject<Article[]>();
    const articlesService = jasmine.createSpyObj('ArticlesService', ['getArticles']);
    articlesService.getArticles.and.returnValue(articlesSubject.asObservable());

    TestBed.configureTestingModule({
      declarations: [ArticlesComponent],
      providers: [
        { provide: ArticlesService, useValue: articlesService }
      ]
    })
      .compileComponents();

    articlesServiceSpy = TestBed.inject(ArticlesService) as jasmine.SpyObj<ArticlesService>;

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    initTestScheduler();
    addMatchers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadArticles() with default parameters on initialization', () => {
    expect(articlesServiceSpy.getArticles).toHaveBeenCalledWith(undefined, undefined);
  });

  it('should call loadArticles() with search term when onSearchNews() is called', fakeAsync(() => {
    const searchTerm = 'test';
    const searchTerm$ = of(searchTerm);
    component.onSearchNews(searchTerm$);
    tick();
    expect(articlesServiceSpy.getArticles).toHaveBeenCalledWith(searchTerm, undefined);
  }));

  it('should call loadArticles() with filters when onFilterChanged() is called', () => {
    component.onFilterChanged(filters);
    expect(articlesServiceSpy.getArticles).toHaveBeenCalledWith('', filters);
  });

  it('should call articlesService.getArticles onFilterChanged', () => {
    component.onFilterChanged(filters);
    expect(articlesServiceSpy.getArticles).toHaveBeenCalled();
  });
});
