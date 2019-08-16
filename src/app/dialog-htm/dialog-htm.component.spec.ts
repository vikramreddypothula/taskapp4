import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHtmComponent } from './dialog-htm.component';

describe('DialogHtmComponent', () => {
  let component: DialogHtmComponent;
  let fixture: ComponentFixture<DialogHtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
