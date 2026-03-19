import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  /* 🔥 objeto donde cada usuario tiene sus tareas */
  tareasPorUsuario:any = {};

  obtenerTareas(usuarioId:number){

    if(!this.tareasPorUsuario[usuarioId]){
      this.tareasPorUsuario[usuarioId] = [];
    }

    return this.tareasPorUsuario[usuarioId];
  }

  agregarTarea(usuarioId:number, tarea:any){

    if(!this.tareasPorUsuario[usuarioId]){
      this.tareasPorUsuario[usuarioId] = [];
    }

    this.tareasPorUsuario[usuarioId].push(tarea);
  }

  terminarTarea(tarea:any){
    tarea.completado = true;
  }

}
