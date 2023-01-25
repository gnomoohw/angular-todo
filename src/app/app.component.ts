import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-todo ';

  listaTarefas:any[]=[];

  adicionarTarefa(item:string)
  {
    this.listaTarefas.push({id:this.listaTarefas.length,name:item});
    console.warn(this.listaTarefas);          
  }

  removerTarefa(id:number)
  {
    console.warn(id);
    this.listaTarefas=this.listaTarefas.filter(tarefa=>tarefa.id!==id);
  }
}
