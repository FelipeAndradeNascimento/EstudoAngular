import { Component, EventEmitter, Output } from "@angular/core";

///Decoretor com os seletores e definição de onde rendereziar meu formulario 
/// novaTransferencia
@Component({
    selector: 'app-novaTransferencia',
    templateUrl: './novaTransferencia.component.html',
    styleUrls: ['./novaTransferencia.scss']
})

export class novaTransferenciaComponent{ 

    @Output() aoTransferir = new EventEmitter<any>();

    var_valor: number;
    var_destino: string;

    //Execução de eventos na pagina e interações, devem ser programadas aqui
    public transferir(strMensagem : string){
        console.log(strMensagem + ", transferência executada com sucesso");
        const valorTrans = {valor: this.var_valor, destino: this.var_destino};
        console.log(valorTrans);
        this.aoTransferir.emit(valorTrans);
        this.limparCampos();
    }

    private limparCampos(){ this.var_valor = 0; this.var_destino = "Informe o destino"; }

}