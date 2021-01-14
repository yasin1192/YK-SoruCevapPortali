/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SorusilComponent } from './sorusil.component';

describe('SorusilComponent', () => {
  let component: SorusilComponent;
  let fixture: ComponentFixture<SorusilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorusilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorusilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
