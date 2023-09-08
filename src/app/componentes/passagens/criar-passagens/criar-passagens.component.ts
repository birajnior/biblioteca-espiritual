import { Component } from '@angular/core';
import { Passagem } from '../passagem';

@Component({
  selector: 'app-criar-passagens',
  templateUrl: './criar-passagens.component.html',
  styleUrls: ['./criar-passagens.component.css'],
})
export class CriarPassagensComponent {
  passagem: Passagem = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'DEV',
    modelo: '',
  };

  salvarPassagem() {
    alert('oi');
  }

  cancelar() {}
}
