import { Component, Input } from '@angular/core';
import { Tarea } from '../tarea/tarea';

@Component({
selector:'app-tareas',
standalone:true,
imports:[Tarea],
templateUrl:'./tareas.html',
styleUrl:'./tareas.css'
})

export class Tareas{

@Input() tareas:any[] = [];

agregarTarea(titulo:string){

if(titulo.trim() === '') return;

this.tareas.push({
id:Date.now().toString(),
titulo:titulo,
completado:false
});

}

eliminarTarea(id:string){

this.tareas = this.tareas.filter(t => t.id !== id);

}

}