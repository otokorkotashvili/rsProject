import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsInputComponent } from './rs-input.component';

describe('RsInputComponent', () => {
  let component: RsInputComponent;
  let fixture: ComponentFixture<RsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
