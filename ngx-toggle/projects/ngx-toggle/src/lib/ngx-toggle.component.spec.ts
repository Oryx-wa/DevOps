import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToggleComponent } from './ngx-toggle.component';

describe('NgxToggleComponent', () => {
  let component: NgxToggleComponent;
  let fixture: ComponentFixture<NgxToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
