import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-tarea',
standalone:true,
imports:[FormsModule],
templateUrl:'./tarea.html',
styleUrl:'./tarea.css'
})

export class Tarea{

@Input() tarea:any;

@Output() eliminar = new EventEmitter<string>();

}