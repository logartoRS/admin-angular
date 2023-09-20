import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input('valorInput') progreso: number = 0;
  @Input() btnClass: String = '';

  @Output('valorOutput') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    } 
    
    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.valorSalida.emit( this.progreso + valor );
    return this.progreso = this.progreso + valor;
  }

  onChange( nuevoValor: number ) {
    if ( nuevoValor >= 100 ) {
      nuevoValor = 100
    } else if ( nuevoValor <= 0 || nuevoValor == null) {
      nuevoValor = 0;
    }

    this.valorSalida.emit( nuevoValor );
  }

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }
}
