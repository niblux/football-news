import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    component.categories = ['Technology', 'Sports', 'Politics'];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filtersChanged event on form submission', () => {
    spyOn(component.filtersChanged, 'emit');
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitButton.nativeElement.click();
    expect(component.filtersChanged.emit).toHaveBeenCalledWith(component.filterForm.value);
  });

  it('should display categories select options', () => {
    const categoriesSelect = fixture.debugElement.query(By.css('select'));
    expect(categoriesSelect.nativeElement).toBeTruthy();
    const options = categoriesSelect.nativeElement.querySelectorAll('option');
    expect(options.length).toEqual(component.categories.length);
    expect(options[0].textContent.trim()).toEqual(component.categories[0]);
  });

  it('should update form control values when user interacts with inputs', () => {
    const startDateInput = fixture.debugElement.query(By.css('input[type="date"][formControlName="startDate"]'));
    const endDateInput = fixture.debugElement.query(By.css('input[type="date"][formControlName="endDate"]'));
    startDateInput.nativeElement.value = '2022-02-01';
    startDateInput.nativeElement.dispatchEvent(new Event('input'));
    endDateInput.nativeElement.value = '2022-02-28';
    endDateInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.filterForm.value.startDate).toEqual('2022-02-01');
    expect(component.filterForm.value.endDate).toEqual('2022-02-28');
  });
});
