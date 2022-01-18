import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlareaComponent } from './controlarea.component';

describe('ControlareaComponent', () => {
  let component: ControlareaComponent;
  let fixture: ComponentFixture<ControlareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
