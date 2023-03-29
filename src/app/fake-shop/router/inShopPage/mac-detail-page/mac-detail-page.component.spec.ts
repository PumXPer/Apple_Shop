import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDetailPageComponent } from './mac-detail-page.component';

describe('MacDetailPageComponent', () => {
  let component: MacDetailPageComponent;
  let fixture: ComponentFixture<MacDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MacDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
