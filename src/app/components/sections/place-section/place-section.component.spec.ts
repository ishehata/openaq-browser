import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSectionComponent } from './place-section.component';

describe('PlaceSectionComponent', () => {
  let component: PlaceSectionComponent;
  let fixture: ComponentFixture<PlaceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
