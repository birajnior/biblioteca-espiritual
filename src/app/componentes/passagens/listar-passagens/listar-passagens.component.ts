import { Component } from '@angular/core';
import { Passagem } from '../passagem';

@Component({
  selector: 'app-listar-passagens',
  templateUrl: './listar-passagens.component.html',
  styleUrls: ['./listar-passagens.component.css'],
})
export class ListarPassagensComponent {
  listaPassagens: Passagem[] = [];
}
