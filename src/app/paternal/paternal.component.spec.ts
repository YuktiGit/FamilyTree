import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaternalComponent } from './paternal.component';

describe('PaternalComponent', () => {
  let component: PaternalComponent;
  let fixture: ComponentFixture<PaternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
