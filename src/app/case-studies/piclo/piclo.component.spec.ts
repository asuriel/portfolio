import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicloComponent } from './piclo.component';

describe('PicloComponent', () => {
  let component: PicloComponent;
  let fixture: ComponentFixture<PicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
