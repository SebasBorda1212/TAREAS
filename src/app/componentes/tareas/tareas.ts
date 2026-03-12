import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-tareas',
standalone: true,
imports:[FormsModule],
templateUrl: './tareas.html',
styleUrl: './tareas.css'
})
export class Tareas {

@Input() tareas:any[] = [];

mostrarModal=false;

titulo="";
fecha="";
descripcion="";

abrirModal(){
this.mostrarModal=true;
}

cerrarModal(){
this.mostrarModal=false;
}

agregarTarea(){

const nuevaTarea={
titulo:this.titulo,
fecha:this.fecha,
descripcion:this.descripcion,
completado:false
};

this.tareas.push(nuevaTarea);

this.titulo="";
this.fecha="";
this.descripcion="";

this.cerrarModal();
}

terminarTarea(tarea:any){
tarea.completado=true;
}

}