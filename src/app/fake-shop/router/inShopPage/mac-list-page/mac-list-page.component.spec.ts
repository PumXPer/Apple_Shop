import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacListPageComponent } from './mac-list-page.component';

describe('MacListPageComponent', () => {
  let component: MacListPageComponent;
  let fixture: ComponentFixture<MacListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MacListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
