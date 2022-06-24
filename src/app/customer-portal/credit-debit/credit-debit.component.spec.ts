import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebitComponent } from './credit-debit.component';

describe('CreditDebitComponent', () => {
  let component: CreditDebitComponent;
  let fixture: ComponentFixture<CreditDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
