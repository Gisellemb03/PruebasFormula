import { Component, OnInit } from '@angular/core';
import { formulaEnergia } from '../Formula/formulaEnergia';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  btnText: string ="Calcular Energía";
  masaText: string ="";
  resultado = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
     let formula: formulaEnergia = new formulaEnergia();
     this.resultado = formula.calcularEnergia(Number.parseInt(this.masaText));

  }




}
