import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFilesPage } from './list-files.page';

describe('ListFilesPage', () => {
  let component: ListFilesPage;
  let fixture: ComponentFixture<ListFilesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
