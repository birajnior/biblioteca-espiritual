import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPassagensComponent } from './componentes/passagens/criar-passagens/criar-passagens.component';
import { ListarPassagensComponent } from './componentes/passagens/listar-passagens/listar-passagens.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPassagens', pathMatch: 'full' },
  { path: 'criarPassagens', component: CriarPassagensComponent },
  { path: 'listarPassagens', component: ListarPassagensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
