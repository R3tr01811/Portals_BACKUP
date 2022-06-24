import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqComponent } from './rfq.component';

describe('RfqComponent', () => {
  let component: RfqComponent;
  let fixture: ComponentFixture<RfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
