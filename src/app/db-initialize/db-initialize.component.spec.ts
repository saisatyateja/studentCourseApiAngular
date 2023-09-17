import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBInitializeComponent } from './db-initialize.component';

describe('DBInitializeComponent', () => {
  let component: DBInitializeComponent;
  let fixture: ComponentFixture<DBInitializeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DBInitializeComponent]
    });
    fixture = TestBed.createComponent(DBInitializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
