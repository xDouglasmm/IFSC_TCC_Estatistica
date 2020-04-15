import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class NavBarService {

  titulo: string;

  @Output() eventoTituloNavBar: EventEmitter<string> = new EventEmitter();

  mudarTitulo(titulo: string) {
    this.titulo = titulo;
    this.eventoTituloNavBar.emit(this.titulo);
  }

  retirarTitulo() {
    this.titulo = '';
    this.eventoTituloNavBar.emit(this.titulo);
  }
}
export enum NavBarColores {
    Verde = '#359d6e',
    Laranja = '#f26528',
    Roxo = '#8b67af',
    Azul = '#4682B4'
}