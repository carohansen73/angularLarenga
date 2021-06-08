import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaStoreComponent } from './larenga-store.component';

describe('LarengaStoreComponent', () => {
  let component: LarengaStoreComponent;
  let fixture: ComponentFixture<LarengaStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
