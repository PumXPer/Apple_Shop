import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadDetailComponent } from './ipad-detail.component';

describe('IpadDetailComponent', () => {
  let component: IpadDetailComponent;
  let fixture: ComponentFixture<IpadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IpadDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
