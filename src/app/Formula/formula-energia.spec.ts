import { formulaEnergia} from './formula-energia';

describe ('formulaEnergia', ()  => {

    let component : formulaEnergia;
    beforeEach( () => {
        component = new formulaEnergia();
    });

    //prueba con multiplicacion por 0


    it('should return 0 if masa is 0', () =>{ 

        const e = component.calcularEnergia(0);
        expect(e).toBe(0);

    })

    //prueba con numeros enteros

    it('should return 449377.5893684089 if masa is 5', () =>{ 

        const e = component.calcularEnergia(5);
        expect(e).toBe(449377.5893684089);

    })

    it('should return 629128.6251157725 if masa is 7', () =>{ 

        const e = component.calcularEnergia(7);
        expect(e).toBe(629128.6251157725);

    })

    it('should return 89875.51787368178 if masa is 1', () =>{ 

        const e = component.calcularEnergia(1);
        expect(e).toBe(89875.51787368178);

    })

    //prueba con decimales 
    it('should return 134813.27681052266 if masa is 1.5', () =>{ 

        const e = component.calcularEnergia(1.5);
        expect(e).toBe(134813.27681052266);

    })


})