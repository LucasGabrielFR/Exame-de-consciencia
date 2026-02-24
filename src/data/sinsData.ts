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
      { id: "1-1", text: "Duvidei ou neguei alguma verdade da fé católica?" },
      { id: "1-2", text: "Deixei de rezar por muito tempo?" },
      { id: "1-3", text: "Acreditei em superstições, horóscopos, feitiçaria ou ocultismo?" },
      { id: "1-4", text: "Coloquei bens materiais, trabalho ou pessoas acima de Deus?" },
      { id: "1-5", text: "Recebi a Sagrada Comunhão em estado de pecado mortal?" }
    ]
  },
  {
    id: "mandamento-2",
    title: "2º Mandamento: Não tomar seu santo nome em vão",
    items: [
      { id: "2-1", text: "Falei o nome de Deus, de Nossa Senhora ou dos santos sem respeito?" },
      { id: "2-2", text: "Jurei falso em nome de Deus?" },
      { id: "2-3", text: "Fiz promessas a Deus e não cumpri?" },
      { id: "2-4", text: "Falei palavrões ou blasfêmias?" }
    ]
  },
  {
    id: "mandamento-3",
    title: "3º Mandamento: Guardar domingos e festas de guarda",
    items: [
      { id: "3-1", text: "Faltei à Missa aos domingos ou dias de preceito por culpa minha?" },
      { id: "3-2", text: "Cheguei muito atrasado à Missa por negligência?" },
      { id: "3-3", text: "Trabalhei desnecessariamente aos domingos, impedindo o descanso e o culto a Deus?" }
    ]
  },
  {
    id: "mandamento-4",
    title: "4º Mandamento: Honrar pai e mãe",
    items: [
      { id: "4-1", text: "Faltei com o respeito, desobedeci ou ofendi meus pais?" },
      { id: "4-2", text: "Negligenciei o cuidado com meus pais na velhice ou doença?" },
      { id: "4-3", text: "Faltei com meus deveres para com minha família (esposo/a, filhos)?" },
      { id: "4-4", text: "Dei mau exemplo aos meus filhos ou negligenciei sua educação religiosa?" }
    ]
  },
  {
    id: "mandamento-5",
    title: "5º Mandamento: Não matar",
    items: [
      { id: "5-1", text: "Agredi alguém física ou verbalmente?" },
      { id: "5-2", text: "Alimentei ódio, rancor ou desejo de vingança?" },
      { id: "5-3", text: "Pratiquei, apoiei ou aconselhei o aborto?" },
      { id: "5-4", text: "Fiz uso de drogas ou abusei de álcool?" },
      { id: "5-5", text: "Fui imprudente no trânsito, colocando vidas em risco?" },
      { id: "5-6", text: "Tentei suicídio ou mutilei meu próprio corpo?" }
    ]
  },
  {
    id: "mandamento-6-9",
    title: "6º e 9º Mandamentos: Castidade e Pureza",
    items: [
      { id: "6-1", text: "Consumi pornografia (revistas, internet, filmes)?" },
      { id: "6-2", text: "Pratiquei a masturbação?" },
      { id: "6-3", text: "Tive relações sexuais fora do casamento?" },
      { id: "6-4", text: "Fui infiel ao meu cônjuge (em pensamentos ou atos)?" },
      { id: "6-5", text: "Usei métodos contraceptivos artificiais?" },
      { id: "6-6", text: "Consenti em pensamentos ou desejos impuros?" }
    ]
  },
  {
    id: "mandamento-7-10",
    title: "7º e 10º Mandamentos: Não furtar e Não cobiçar",
    items: [
      { id: "7-1", text: "Roubei ou peguei algo que não me pertencia?" },
      { id: "7-2", text: "Fiz downloads piratas ou plagiei o trabalho de outros?" },
      { id: "7-3", text: "Fui desonesto nos negócios, no trabalho ou nos estudos?" },
      { id: "7-4", text: "Retive bens emprestados ou não paguei minhas dívidas?" },
      { id: "7-5", text: "Tive inveja dos bens, do sucesso ou das qualidades dos outros?" },
      { id: "7-6", text: "Fui ganancioso ou apegado excessivamente ao dinheiro?" }
    ]
  },
  {
    id: "mandamento-8",
    title: "8º Mandamento: Não levantar falso testemunho",
    items: [
      { id: "8-1", text: "Menti ou omiti a verdade para prejudicar alguém ou me beneficiar?" },
      { id: "8-2", text: "Fiz fofocas ou espalhei boatos sobre os outros?" },
      { id: "8-3", text: "Revelei segredos que me foram confiados?" },
      { id: "8-4", text: "Julguei precipitadamente as intenções dos outros?" }
    ]
  },
  {
    id: "pecados-capitais",
    title: "Os 7 Pecados Capitais",
    items: [
      { id: "pc-1", text: "Soberba: Fui orgulhoso, vaidoso ou me achei superior aos outros?" },
      { id: "pc-2", text: "Avareza: Fui mesquinho, neguei esmola ou ajuda a quem precisava?" },
      { id: "pc-3", text: "Luxúria: Busquei o prazer sexual de forma desordenada?" },
      { id: "pc-4", text: "Ira: Perdi a paciência facilmente, gritei ou fui agressivo?" },
      { id: "pc-5", text: "Gula: Comi ou bebi em excesso, sem moderação?" },
      { id: "pc-6", text: "Inveja: Entristeci-me com o bem alheio ou alegrei-me com o mal do outro?" },
      { id: "pc-7", text: "Preguiça: Negligenciei meus deveres religiosos, familiares ou profissionais por preguiça?" }
    ]
  }
];
