/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoruduzenleComponent } from './soruduzenle.component';

describe('SoruduzenleComponent', () => {
  let component: SoruduzenleComponent;
  let fixture: ComponentFixture<SoruduzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoruduzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoruduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
