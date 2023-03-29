import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDetailComponent } from './mac-detail.component';

describe('MacDetailComponent', () => {
  let component: MacDetailComponent;
  let fixture: ComponentFixture<MacDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MacDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
