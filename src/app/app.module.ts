import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPassagensComponent } from './componentes/passagens/criar-passagens/criar-passagens.component';
import { ListarPassagensComponent } from './componentes/passagens/listar-passagens/listar-passagens.component';
import { PassagemComponent } from './componentes/passagens/passagem/passagem.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPassagensComponent,
    ListarPassagensComponent,
    PassagemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
