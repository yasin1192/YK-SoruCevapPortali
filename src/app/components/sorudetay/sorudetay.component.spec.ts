/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SorudetayComponent } from './sorudetay.component';

describe('SorudetayComponent', () => {
  let component: SorudetayComponent;
  let fixture: ComponentFixture<SorudetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorudetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorudetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
