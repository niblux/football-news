import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  categories = ['Sports', 'Politics', 'Entertainment']; // example categories
  @Output() filterChanged = new EventEmitter<any>();

  onCategoryChange(category:any) {
    this.filterChanged.emit({ category });
  }

  onStartDateChange(startDate: string) {
    this.filterChanged.emit({ startDate });
  }

  onEndDateChange(endDate: string) {
    this.filterChanged.emit({ endDate });
  }
}
