import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from '../egreso.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
    constructor() { }
    
    @Input() egreso:Egreso;
    @Input() indice:number;
    @Input() ingresoTotal:number;

    @Output() iToEliminar= new EventEmitter<number>();
    
    ngOnInit(): void {
      
    }

    eliminar(){
     this.iToEliminar.emit(this.indice);
    }

    calcularPorcentaje(egreso:Egreso){
   return  egreso.valor/this.ingresoTotal;
    }
  
  }