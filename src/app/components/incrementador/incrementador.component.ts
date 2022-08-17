import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit()  {
    this.btnClass = `btn ${ this.btnClass }`
  }
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorsalida: EventEmitter<number> = new EventEmitter();
 
  
  cambiarValor( valor:number ){
 
    if(this.progreso >= 100 && valor > 1 ){
      this.progreso -= 5;
    }
  
    if(this.progreso <= 0 && valor < 1 ){
      this.progreso += 5;
    }
   
    this.progreso = this.progreso + valor;
    this.valorsalida.emit(this.progreso)
  }
  onChange( nuevoValor:number){
    
    if(nuevoValor >= 100 ){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }
    else{
      this.progreso = nuevoValor;
    }
   this.valorsalida.emit( nuevoValor );
  }
  
  
  }
  


