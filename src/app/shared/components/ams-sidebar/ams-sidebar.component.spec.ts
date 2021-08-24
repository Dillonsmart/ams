import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsSidebarComponent } from './ams-sidebar.component';

describe('AmsSidebarComponent', () => {
  let component: AmsSidebarComponent;
  let fixture: ComponentFixture<AmsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
