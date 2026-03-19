import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';

@Component({
selector: 'app-tareas',
standalone: true,
imports:[FormsModule],
templateUrl: './tareas.html',
styleUrl: './tareas.css'
})
export class Tareas {

tareas:any[] = [];

mostrarModal=false;

titulo="";
fecha="";
descripcion="";

constructor(private tareasService:TareasService){}

/* 🔥 ESTE ES EL TRUCO */
ngOnInit(){
this.tareas = this.tareasService.obtenerTareas();
}

abrirModal(){
this.mostrarModal=true;
}

cerrarModal(){
this.mostrarModal=false;
}

agregarTarea(){

const ahora = new Date();

const fechaFormateada = ahora.toLocaleString('es-CO', {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric',
hour:'numeric',
minute:'2-digit',
hour12:true
});

const nuevaTarea={
titulo:this.titulo,
fecha:fechaFormateada,
descripcion:this.descripcion,
completado:false
};

this.tareasService.agregarTarea(nuevaTarea);

this.titulo="";
this.fecha="";
this.descripcion="";

this.cerrarModal();
}

terminarTarea(tarea:any){
this.tareasService.terminarTarea(tarea);
}

}
