import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() categories: string[] = [];
  @Output() filtersChanged = new EventEmitter();

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      categories: [[]],
      startDate: [''],
      endDate: ['']
    });
  }

  onSubmit() {
    console.log('submission', this.filterForm.value)
    this.filtersChanged.emit(this.filterForm.value);
  }
}
