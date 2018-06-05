import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginalComponent } from './orginal.component';

describe('OrginalComponent', () => {
  let component: OrginalComponent;
  let fixture: ComponentFixture<OrginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
