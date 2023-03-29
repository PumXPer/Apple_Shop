import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneListPageComponent } from './iphone-list-page.component';

describe('IphoneListPageComponent', () => {
  let component: IphoneListPageComponent;
  let fixture: ComponentFixture<IphoneListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IphoneListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
