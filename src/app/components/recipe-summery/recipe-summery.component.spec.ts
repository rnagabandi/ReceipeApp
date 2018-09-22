import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSummeryComponent } from './recipe-summery.component';

describe('RecipeSummeryComponent', () => {
  let component: RecipeSummeryComponent;
  let fixture: ComponentFixture<RecipeSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
