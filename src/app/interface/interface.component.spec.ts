import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceComponent } from './interface.component';

describe('InterfaceComponent', () => {
  let component: InterfaceComponent;
  let fixture: ComponentFixture<InterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InterfaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col h1').textContent).toContain('Formula Energía');
  });
  it('should render inputText', () => {
    const fixture = TestBed.createComponent(InterfaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col input').placeholder).toContain('Ingrese la masa');
  });
  it('should render inputBottom ', () => {
    const fixture = TestBed.createComponent(InterfaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.btn').value).toContain('Calcular Energía');
  });
  it('should render resultado ', () => {
    const fixture = TestBed.createComponent(InterfaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.life-container').textContent).toContain('0');
  });
  it('should render descripcion ', () => {
    const fixture = TestBed.createComponent(InterfaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.sn').textContent).toContain('Calculadora para obtener la Energía de un cuerpo. Energía = masa * velocidad de la luz (vl=299.792458 km/s)');
  });




});
