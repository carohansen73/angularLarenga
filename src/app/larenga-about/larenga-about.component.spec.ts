import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaAboutComponent } from './larenga-about.component';

describe('LarengaAboutComponent', () => {
  let component: LarengaAboutComponent;
  let fixture: ComponentFixture<LarengaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
