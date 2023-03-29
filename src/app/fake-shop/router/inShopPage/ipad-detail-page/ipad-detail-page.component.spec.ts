import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadDetailPageComponent } from './ipad-detail-page.component';

describe('IpadDetailPageComponent', () => {
  let component: IpadDetailPageComponent;
  let fixture: ComponentFixture<IpadDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IpadDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
