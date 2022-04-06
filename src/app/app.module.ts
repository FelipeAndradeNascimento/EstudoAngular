import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { novaTransferenciaComponent } from './novaTransferencia/novaTransferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    novaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
