import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsHeaderComponent } from './ams-header.component';

describe('AmsHeaderComponent', () => {
  let component: AmsHeaderComponent;
  let fixture: ComponentFixture<AmsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
