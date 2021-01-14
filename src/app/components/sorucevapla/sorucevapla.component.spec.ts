/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SorucevaplaComponent } from './sorucevapla.component';

describe('SorucevaplaComponent', () => {
  let component: SorucevaplaComponent;
  let fixture: ComponentFixture<SorucevaplaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorucevaplaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorucevaplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
