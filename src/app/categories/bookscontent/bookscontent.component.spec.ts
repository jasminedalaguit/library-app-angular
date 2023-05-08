import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscontentComponent } from './bookscontent.component';

describe('BookscontentComponent', () => {
  let component: BookscontentComponent;
  let fixture: ComponentFixture<BookscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookscontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
