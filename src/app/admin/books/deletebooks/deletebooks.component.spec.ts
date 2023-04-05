import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebooksComponent } from './deletebooks.component';

describe('DeletebooksComponent', () => {
  let component: DeletebooksComponent;
  let fixture: ComponentFixture<DeletebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
