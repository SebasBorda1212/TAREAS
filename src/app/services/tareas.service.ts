import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas:any[] = [];

  obtenerTareas(){
    return this.tareas;
  }

  agregarTarea(tarea:any){
    this.tareas.push(tarea);
  }

  terminarTarea(tarea:any){
    tarea.completado = true;
  }

}
