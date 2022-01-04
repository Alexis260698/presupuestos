import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Egreso } from '../egreso.model';
import { EgresoService } from '../egreso.service';
import { Ingreso } from '../ingreso.model';
import { IngresoService } from '../ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('action') action:ElementRef;
  @ViewChild('descripcion') descripcion:ElementRef;
  valor:number;
  tipo:string="ing";


  constructor(private ingresoService:IngresoService, 
    private egresoService:EgresoService) { }

  ngOnInit(): void {
  }
  

  tipoOperacion(evento:Event){
    this.tipo = (evento.target as HTMLSelectElement).value;
  }
  
  agregar(){
    if(this.tipo=="ing"){
      this.ingresoService.ingresos.push(new Ingreso(this.descripcion.nativeElement.value,this.valor));
    }else{
      this.egresoService.egresos.push(new Egreso(this.descripcion.nativeElement.value,this.valor, 1));
    }
    
  }


}
