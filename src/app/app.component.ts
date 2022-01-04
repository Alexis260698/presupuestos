import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'presupuesto-app';

  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(
    private ingresosService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingresos = this.ingresosService.ingresos;
    this.egresos = this.egresoService.egresos;
  }


  eliminar(indice: number) {
    this.ingresosService.eliminarIngreso(indice);
  }

  eliminarE(indice: number) {
    this.egresoService.eliminarEgreso(indice);
  }

  getIngresoTotal() {
    let ingresoTotal: number=0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal: number=0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
