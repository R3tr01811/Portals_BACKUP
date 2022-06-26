import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInitComponent } from './payment-init.component';

describe('PaymentInitComponent', () => {
  let component: PaymentInitComponent;
  let fixture: ComponentFixture<PaymentInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
