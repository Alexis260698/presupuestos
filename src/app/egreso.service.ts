import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos:Egreso[]=[new Egreso("Salario",1000,1), new Egreso("Venta Coche", 2000,1)];

    agregarEgreso(egreso:Egreso){
        this.egresos.push(egreso);
    }

    eliminarEgreso(indice:number){
        this.egresos.splice(indice,1);
        }

}