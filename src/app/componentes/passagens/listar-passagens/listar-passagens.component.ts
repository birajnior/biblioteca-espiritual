import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-passagens',
  templateUrl: './listar-passagens.component.html',
  styleUrls: ['./listar-passagens.component.css'],
})
export class ListarPassagensComponent {
  listaPassagens = [
    {
      conteudo: 'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.',
      autoria: 'João 3:16',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Entrando Jesus em Cafarnaum, dirigiu-se a ele um centurião, pedindo-lhe ajuda. E disse: "Senhor, meu servo está em casa, paralítico, em terrível sofrimento". Jesus lhe disse: "Eu irei curá-lo". Respondeu o centurião: "Senhor, não mereço receber-te debaixo do meu teto. Mas dize apenas uma palavra, e o meu servo será curado. Pois eu também sou homem sujeito à autoridade e com soldados sob o meu comando. Digo a um: Vá, e ele vai; e a outro: Venha, e ele vem. Digo a meu servo: Faça isto, e ele faz". Ao ouvir isso, Jesus admirou-se e disse aos que o seguiam: "Digo a vocês a verdade: Não encontrei em Israel ninguém com tamanha fé. Eu digo que muitos virão do oriente e do ocidente e se sentarão à mesa com Abraão, Isaque e Jacó no Reino dos céus. Mas os súditos do Reino serão lançados para fora, nas trevas, onde haverá choro e ranger de dentes". Então Jesus disse ao centurião: "Vá! Como você creu, assim acontecerá!" Na mesma hora o seu servo foi curado.',
      autoria: 'Mateus 8:5-13',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.',
      autoria: 'Josué 1:9',
      modelo: 'modelo2',
    },
  ];
}
