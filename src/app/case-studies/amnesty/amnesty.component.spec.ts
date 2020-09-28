import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmnestyComponent } from './amnesty.component';

describe('AmnestyComponent', () => {
  let component: AmnestyComponent;
  let fixture: ComponentFixture<AmnestyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmnestyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmnestyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
