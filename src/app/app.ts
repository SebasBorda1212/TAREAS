import { Component } from '@angular/core';
import { Usuario } from './componentes/usuario/usuario';
import { Tareas } from './componentes/tareas/tareas';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Usuario, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  usuarios = USUARIOS_FALSOS;

  usuarioSeleccionado:any = this.usuarios[0];

  seleccionarUsuario(usuario:any){
    this.usuarioSeleccionado = usuario;
  }

}
