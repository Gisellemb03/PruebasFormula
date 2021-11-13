export class formulaEnergia{
    vluz = 299.792458 
    e = 0

    constructor (){

    }

    calcularEnergia(masa:number) {
        this.e = masa*(this.vluz*this.vluz);

        return this.e;
        
  
    }



}