import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneDetailPageComponent } from './iphone-detail-page.component';

describe('IphoneDetailPageComponent', () => {
  let component: IphoneDetailPageComponent;
  let fixture: ComponentFixture<IphoneDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IphoneDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
