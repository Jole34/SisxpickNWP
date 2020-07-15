import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsIIComponent } from './cs-ii.component';

describe('CsIIComponent', () => {
  let component: CsIIComponent;
  let fixture: ComponentFixture<CsIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
