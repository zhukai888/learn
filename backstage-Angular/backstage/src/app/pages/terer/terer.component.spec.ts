import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TererComponent } from './terer.component';

describe('TererComponent', () => {
  let component: TererComponent;
  let fixture: ComponentFixture<TererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
