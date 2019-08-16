import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DellListComponent } from './dell-list.component';

describe('DellListComponent', () => {
  let component: DellListComponent;
  let fixture: ComponentFixture<DellListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DellListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
