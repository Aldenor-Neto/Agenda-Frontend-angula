import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecarioComponent } from './cabecario.component';

describe('CabecarioComponent', () => {
  let component: CabecarioComponent;
  let fixture: ComponentFixture<CabecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
