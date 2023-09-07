import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPassagensComponent } from './criar-passagens.component';

describe('CriarPassagensComponent', () => {
  let component: CriarPassagensComponent;
  let fixture: ComponentFixture<CriarPassagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPassagensComponent]
    });
    fixture = TestBed.createComponent(CriarPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
