import { Component, Input } from '@angular/core';
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

@Input() usuarioId!: number;

tareas:any[] = [];

mostrarModal=false;

titulo="";
fecha="";
descripcion="";

constructor(private tareasService:TareasService){}

ngOnChanges(){
if(this.usuarioId){
this.tareas = this.tareasService.obtenerTareas(this.usuarioId);
}
}

abrirModal(){
this.mostrarModal=true;
}

cerrarModal(){
this.mostrarModal=false;
}

agregarTarea(){

const fechaObj = new Date(this.fecha);

const fechaFormateada =
fechaObj.toLocaleDateString('es-CO', {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
})
+ ' - ' +
fechaObj.toLocaleTimeString('es-CO', {
hour:'2-digit',
minute:'2-digit',
hour12:true
});

const nuevaTarea={
titulo:this.titulo,
fecha:fechaFormateada,
descripcion:this.descripcion,
completado:false
};

this.tareasService.agregarTarea(this.usuarioId, nuevaTarea);

this.titulo="";
this.fecha="";
this.descripcion="";

this.cerrarModal();
}

terminarTarea(tarea:any){
this.tareasService.terminarTarea(tarea);
}

}
