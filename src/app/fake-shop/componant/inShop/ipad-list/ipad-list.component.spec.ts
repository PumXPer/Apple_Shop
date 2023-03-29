import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadListComponent } from './ipad-list.component';

describe('IpadListComponent', () => {
  let component: IpadListComponent;
  let fixture: ComponentFixture<IpadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IpadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
