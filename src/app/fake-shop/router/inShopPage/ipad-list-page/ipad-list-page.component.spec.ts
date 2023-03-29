import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadListPageComponent } from './ipad-list-page.component';

describe('IpadListPageComponent', () => {
  let component: IpadListPageComponent;
  let fixture: ComponentFixture<IpadListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IpadListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
