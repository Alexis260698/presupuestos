import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor() { }
  
  @Input() ingreso:Ingreso;
  @Input() indice:number;
  @Output() Itoeliminar=new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  eliminar(){
    this.Itoeliminar.emit(this.indice);
  }


}
