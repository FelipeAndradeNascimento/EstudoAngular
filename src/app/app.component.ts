import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Projeto1';
  /*
  inputValor : number;
  inputDestino : string;
  refatorando o codigo acima, adicionando um objeto para obter esses valores
*/
//Sempre inicialize um objeto
  objetoTransferencia:any = {};

  //dentro da variavel $event, contêm os valores que passei 
  //do template, para dentro da classe
  transferencia($event): void{ 
    console.log("Metodo Transferencia: " + $event); 
    this.objetoTransferencia = $event;
  }

}
