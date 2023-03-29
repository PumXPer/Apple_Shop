import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacListComponent } from './mac-list.component';

describe('MacListComponent', () => {
  let component: MacListComponent;
  let fixture: ComponentFixture<MacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MacListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
