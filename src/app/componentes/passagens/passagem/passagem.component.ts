import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.css'],
})
export class PassagemComponent {
  @Input() passagem = {
    conteudo:
      'Por isso não tema, pois estou com você; não tenha medo pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.',
    autoria: 'Isaías 41:10',
    modelo: 'modelo3',
  };

  larguraPassagem(): string {
    if (this.passagem.conteudo.length >= 256) {
      return 'passagem-g';
    }
    return 'passagem-p';
  }
}
