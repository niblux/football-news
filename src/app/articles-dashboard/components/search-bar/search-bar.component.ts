import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<Observable<string>>();

  searchControl: FormControl;

  constructor() {
    this.searchControl = new FormControl();
  }

  onSearchTerm(): void {
    const search$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((searchTerm: string) => searchTerm)
    )

    this.searchTerm.emit(search$);
  }
}
