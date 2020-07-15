import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsIComponent } from './cs-i.component';

describe('CsIComponent', () => {
  let component: CsIComponent;
  let fixture: ComponentFixture<CsIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
