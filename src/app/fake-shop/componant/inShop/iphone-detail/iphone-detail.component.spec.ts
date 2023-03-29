import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneDetailComponent } from './iphone-detail.component';

describe('IphoneDetailComponent', () => {
  let component: IphoneDetailComponent;
  let fixture: ComponentFixture<IphoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IphoneDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
