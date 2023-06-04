import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmFilePage } from './confirm-file.page';

describe('ConfirmFilePage', () => {
  let component: ConfirmFilePage;
  let fixture: ComponentFixture<ConfirmFilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
