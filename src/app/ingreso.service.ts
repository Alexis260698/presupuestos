
import { EventEmitter } from "@angular/core";
import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingresos:Ingreso[]=[new Ingreso("Salario",2500), new Ingreso("Venta Coche", 1500)];


    



    agregarIngreso(ingreso:Ingreso){
        this.ingresos.push(ingreso);

        for(let i = 0 ; i < this.ingresos.length ; i++){
            console.log(this.ingresos[i].descripcion);
        }
    }

    eliminarIngreso(indice:number){
    this.ingresos.splice(indice,1);
    }
}