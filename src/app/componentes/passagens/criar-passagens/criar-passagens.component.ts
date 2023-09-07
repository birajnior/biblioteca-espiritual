import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-passagens',
  templateUrl: './criar-passagens.component.html',
  styleUrls: ['./criar-passagens.component.css'],
})
export class CriarPassagensComponent {
  passagem = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'DEV',
    modelo: '',
  };

  salvarPassagem() {
    alert('oi');
  }

  cancelar() {}
}
