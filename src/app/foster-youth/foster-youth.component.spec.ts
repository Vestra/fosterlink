import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterYouthComponent } from './foster-youth.component';

describe('FosterYouthComponent', () => {
  let component: FosterYouthComponent;
  let fixture: ComponentFixture<FosterYouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterYouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterYouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
