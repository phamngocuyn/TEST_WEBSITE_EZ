import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorevalueComponent } from './corevalue.component';

describe('CorevalueComponent', () => {
  let component: CorevalueComponent;
  let fixture: ComponentFixture<CorevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorevalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
