import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockOfOrginalComponent } from './mock-of-orginal.component';

describe('MockOfOrginalComponent', () => {
  let component: MockOfOrginalComponent;
  let fixture: ComponentFixture<MockOfOrginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockOfOrginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockOfOrginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
