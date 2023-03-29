import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeShopComponent } from './fake-shop.component';

describe('FakeShopComponent', () => {
  let component: FakeShopComponent;
  let fixture: ComponentFixture<FakeShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FakeShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
