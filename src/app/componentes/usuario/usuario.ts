import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector:'app-usuario',
standalone:true,
templateUrl:'./usuario.html',
styleUrl:'./usuario.css'
})

export class Usuario{

@Input() usuario:any;

@Input() seleccionado:boolean = false;

@Output() seleccionar = new EventEmitter();

seleccionarUsuario(){
this.seleccionar.emit(this.usuario);
}

}
