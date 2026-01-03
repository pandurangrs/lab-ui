import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBaneerComponent } from './main-baneer.component';

describe('MainBaneerComponent', () => {
  let component: MainBaneerComponent;
  let fixture: ComponentFixture<MainBaneerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBaneerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBaneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
