import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaborgComponent } from './seaborg.component';

describe('SeaborgComponent', () => {
  let component: SeaborgComponent;
  let fixture: ComponentFixture<SeaborgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaborgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaborgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
