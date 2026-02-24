export interface SinItem {
  id: string;
  text: string;
}

export interface SinCategory {
  id: string;
  title: string;
  items: SinItem[];
}

export const sinsData: SinCategory[] = [
  {
    id: "mandamento-1",
    title: "1º Mandamento: Amar a Deus sobre todas as coisas",
    items: [
      { id: "1-1", text: "Duvidei ou neguei alguma verdade da fé católica? Em que situação? Quantas vezes?" },
      { id: "1-2", text: "Deixei de rezar por muito tempo? Por quanto tempo? Quantas vezes?" },
      { id: "1-3", text: "Acreditei em superstições, horóscopos, feitiçaria ou ocultismo? Em que situação? Quantas vezes?" },
      { id: "1-4", text: "Coloquei bens materiais, trabalho ou pessoas acima de Deus? Em que situação? Quantas vezes?" },
      { id: "1-5", text: "Recebi a Sagrada Comunhão em estado de pecado mortal? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-2",
    title: "2º Mandamento: Não tomar seu santo nome em vão",
    items: [
      { id: "2-1", text: "Falei o nome de Deus, de Nossa Senhora ou dos santos sem respeito? Em que situação? Quantas vezes?" },
      { id: "2-2", text: "Jurei falso em nome de Deus? Em que situação? Quantas vezes?" },
      { id: "2-3", text: "Fiz promessas a Deus e não cumpri? Em que situação? Quantas vezes?" },
      { id: "2-4", text: "Falei palavrões ou blasfêmias? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-3",
    title: "3º Mandamento: Guardar domingos e festas de guarda",
    items: [
      { id: "3-1", text: "Faltei à Missa aos domingos ou dias de preceito por culpa minha? Em que situação? Quantas vezes?" },
      { id: "3-2", text: "Cheguei muito atrasado à Missa por negligência? Em que situação? Quantas vezes?" },
      { id: "3-3", text: "Trabalhei desnecessariamente aos domingos, impedindo o descanso e o culto a Deus? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-4",
    title: "4º Mandamento: Honrar pai e mãe",
    items: [
      { id: "4-1", text: "Faltei com o respeito, desobedeci ou ofendi meus pais? Em que situação? Quantas vezes?" },
      { id: "4-2", text: "Negligenciei o cuidado com meus pais na velhice ou doença? Em que situação? Quantas vezes?" },
      { id: "4-3", text: "Faltei com meus deveres para com minha família (esposo/a, filhos)? Em que situação? Quantas vezes?" },
      { id: "4-4", text: "Dei mau exemplo aos meus filhos ou negligenciei sua educação religiosa? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-5",
    title: "5º Mandamento: Não matar",
    items: [
      { id: "5-1", text: "Agredi alguém física ou verbalmente? Em que situação? Quantas vezes?" },
      { id: "5-2", text: "Alimentei ódio, rancor ou desejo de vingança? Em que situação? Quantas vezes?" },
      { id: "5-3", text: "Pratiquei, apoiei ou aconselhei o aborto? Em que situação? Quantas vezes?" },
      { id: "5-4", text: "Fiz uso de drogas ou abusei de álcool? Em que situação? Quantas vezes?" },
      { id: "5-5", text: "Fui imprudente no trânsito, colocando vidas em risco? Em que situação? Quantas vezes?" },
      { id: "5-6", text: "Tentei suicídio ou mutilei meu próprio corpo? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-6-9",
    title: "6º e 9º Mandamentos: Castidade e Pureza",
    items: [
      { id: "6-1", text: "Consumi pornografia (revistas, internet, filmes)? Em que situação? Quantas vezes?" },
      { id: "6-2", text: "Pratiquei a masturbação? Em que situação? Quantas vezes?" },
      { id: "6-3", text: "Tive relações sexuais fora do casamento? Em que situação? Quantas vezes?" },
      { id: "6-4", text: "Fui infiel ao meu cônjuge (em pensamentos ou atos)? Em que situação? Quantas vezes?" },
      { id: "6-5", text: "Usei métodos contraceptivos artificiais? Em que situação? Quantas vezes?" },
      { id: "6-6", text: "Consenti em pensamentos ou desejos impuros? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-7-10",
    title: "7º e 10º Mandamentos: Não furtar e Não cobiçar",
    items: [
      { id: "7-1", text: "Roubei ou peguei algo que não me pertencia? Em que situação? Quantas vezes?" },
      { id: "7-2", text: "Fiz downloads piratas ou plagiei o trabalho de outros? Em que situação? Quantas vezes?" },
      { id: "7-3", text: "Fui desonesto nos negócios, no trabalho ou nos estudos? Em que situação? Quantas vezes?" },
      { id: "7-4", text: "Retive bens emprestados ou não paguei minhas dívidas? Em que situação? Quantas vezes?" },
      { id: "7-5", text: "Tive inveja dos bens, do sucesso ou das qualidades dos outros? Em que situação? Quantas vezes?" },
      { id: "7-6", text: "Fui ganancioso ou apegado excessivamente ao dinheiro? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "mandamento-8",
    title: "8º Mandamento: Não levantar falso testemunho",
    items: [
      { id: "8-1", text: "Menti ou omiti a verdade para prejudicar alguém ou me beneficiar? Em que situação? Quantas vezes?" },
      { id: "8-2", text: "Fiz fofocas ou espalhei boatos sobre os outros? Em que situação? Quantas vezes?" },
      { id: "8-3", text: "Revelei segredos que me foram confiados? Em que situação? Quantas vezes?" },
      { id: "8-4", text: "Julguei precipitadamente as intenções dos outros? Em que situação? Quantas vezes?" }
    ]
  },
  {
    id: "pecados-capitais",
    title: "Os 7 Pecados Capitais",
    items: [
      { id: "pc-1", text: "Soberba: Fui orgulhoso, vaidoso ou me achei superior aos outros? Em que situação? Quantas vezes?" },
      { id: "pc-2", text: "Avareza: Fui mesquinho, neguei esmola ou ajuda a quem precisava? Em que situação? Quantas vezes?" },
      { id: "pc-3", text: "Luxúria: Busquei o prazer sexual de forma desordenada? Em que situação? Quantas vezes?" },
      { id: "pc-4", text: "Ira: Perdi a paciência facilmente, gritei ou fui agressivo? Em que situação? Quantas vezes?" },
      { id: "pc-5", text: "Gula: Comi ou bebi em excesso, sem moderação? Em que situação? Quantas vezes?" },
      { id: "pc-6", text: "Inveja: Entristeci-me com o bem alheio ou alegrei-me com o mal do outro? Em que situação? Quantas vezes?" },
      { id: "pc-7", text: "Preguiça: Negligenciei meus deveres religiosos, familiares ou profissionais por preguiça? Em que situação? Quantas vezes?" }
    ]
  }
];
