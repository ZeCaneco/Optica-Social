// BANCO DE DADOS 1: EVOLUÇÃO HISTÓRICA DOS MODELOS DA LUZ
const teoriasData = {
 antiguidade: {
   titulo: "Antiguidade Clássica (Pitágoras, Euclides, Ptolomeu)",
   texto: "Na Antiguidade, predominava a teoria da emissão (ou extramissão), proposta por filósofos e matemáticos como Pitágoras e Euclides. Acreditava-se que os próprios olhos emitiam raios ou 'tentáculos visuais' que tocavam os objetos, permitindo a visão. Mais tarde, Alhazen (Ibn al-Haytham), no século XI, revolucionou a óptica ao provar experimentalmente que a luz entra nos olhos vinda das fontes luminosas ou refletida pelos objetos."
 },
 huygens: {
   titulo: "Christiaan Huygens (Teoria Ondulatória - 1678)",
   texto: "Huygens propôs que a luz se propaga em forma de ondas longitudinais através de um meio hipotético chamado 'éter luminífero'. O Modelo Ondulatório explicava com facilidade os fenômenos de reflexão e refração, prevendo que a luz se deslocava mais devagar em meios mais densos (como a água e o vidro)."
 },
 newton: {
   titulo: "Isaac Newton (Teoria Corpuscular - 1704)",
   texto: "Newton defendia que a luz era composta por uma corrente de minúsculas partículas ou 'corpúsculos' emitidos em linha reta por corpos luminosos. Com a decomposição da luz branca em um prisma, ele demonstrou que a cor é uma propriedade intrínseca da luz, e não criada pelos materiais."
 },
 young: {
   titulo: "Thomas Young e Augustin-Jean Fresnel (Interferência - Século XIX)",
   texto: "Young realizou o famoso experimento da fenda dupla (1801), demonstrando a interferência e a difração da luz — fenômenos exclusivos de ondas. Fresnel complementou matematicamente a teoria, estabelecendo que as ondas luminosas são transversais."
 },
 maxwell: {
   titulo: "James Clerk Maxwell (Ondas Eletromagnéticas - 1865)",
   texto: "Maxwell unificou a eletricidade, o magnetismo e a óptica em um único conjunto de equações. Ele demonstrou teoricamente que a luz é uma onda eletromagnética transversal que se propaga no vácuo com velocidade constante (c ≈ 300.000 km/s)."
 },
 einstein: {
   titulo: "Albert Einstein (Efeito Fotoelétrico e Fótons - 1905)",
   texto: "Ao explicar o Efeito Fotoelétrico (pelo qual ganhou o Prêmio Nobel de Física), Einstein resgatou a ideia de pacotes discretos de energia, chamados de 'quanta' de luz ou fótons. A energia de cada fóton depende diretamente de sua frequência (E = h·f)."
 },
 debroglie: {
   titulo: "Louis de Broglie e a Mecânica Quântica (Dualidade Onda-Partícula)",
   texto: "Em 1924, De Broglie estabeleceu que todas as partículas e a radiação eletromagnética possuem uma natureza dual: em certos experimentos (como a difração), a luz se comporta como onda; em outros (como o efeito fotoelétrico), se comporta como feixe de partículas (fótons)."
 }
};


// BANCO DE DADOS 3: CONTEXTOS SOCIAIS
const contextosData = {
 residencial: {
   titulo: "Ambiente Residencial",
   texto: "Utilização de lâmpadas LED inteligentes com ajuste de temperatura de cor, pisos táteis nas áreas comuns e sistemas de iluminação automatizados para auxiliar pessoas com baixa visão no reconhecimento de cômodos e obstáculos."
 },
 comercial: {
   titulo: "Ambiente Comercial",
   texto: "Sinalização tátil em Braille, contraste visual adequado nas saídas e degraus, além de integração de leitores de código de barras em áudio para autonomia de compras."
 },
 escolar: {
   titulo: "Ambiente Escolar",
   texto: "Uso de lupas eletrônicas, telas adaptadas com alto contraste, audiolivros, materiais pedagógicos em relevo e iluminação direcionada em salas de aula para inclusão de alunos com deficiência visual."
 },
 industrial: {
   titulo: "Ambiente Industrial",
   texto: "Dispositivos de segurança baseados em sensores ultrassônicos e ópticos, sinalização luminescente de emergência e alertas sonoros adaptados para ambientes fabris acessíveis."
 }
};


// BANCO DE DADOS 4: ANATOMIA E FÍSICA DA VISÃO
const anatomiaData = {
  como_luz_entra: {
    titulo: "Como a Luz Entra no Olho",
    texto: "A luz entra pela córnea, passa pela pupila (cujo diâmetro é controlado pela íris), atravessa o cristalino e projeta uma imagem invertida na retina."
  },
  oque_e_luz: {
    titulo: "O que é a Luz?",
    texto: "A luz é uma onda eletromagnética capaz de sensibilizar os fotorreceptores localizados na retina do olho humano."
  },
  olho: {
    titulo: "Anatomia do Olho Humano",
    texto: "Composto por Córnea, Íris, Pupila, Cristalino, Retina, Esclera, Humor Aquoso, Humor Vítreo e Nervo Óptico."
  },
  imagem: {
    titulo: "Formação da Imagem",
    texto: "A córnea e o cristalino funcionam como lentes convergentes que focam os raios luminosos exatamente sobre a retina."
  },
  nervo: {
    titulo: "Nervo Óptico",
    texto: "Responsável por conduzir os impulsos elétricos gerados pelos fotorreceptores da retina até o córtex visual no cérebro."
  },
  espectro: {
    titulo: "Espectro Visível",
    texto: "A faixa do espectro eletromagnético que o olho humano consegue perceber, variando aproximadamente de 380 nm (violeta) a 750 nm (vermelho)."
  },
  fenomenos: {
    titulo: "Refração no Olho",
    texto: "A mudança de velocidade e direção da luz ao passar pelo meio córnea/humor aquoso/cristalino, necessária para focar a imagem."
  },
  cores: {
    titulo: "Formação das Cores",
    texto: "Percebida através de células fotossensíveis chamadas cones (sensíveis ao vermelho, verde e azul - sistema RGB)."
  }
};

// FUNÇÃO MOSTRAR ANATOMIA (EXIBE A IMAGEM APENAS NO BOTÃO 'OLHO')
function mostrarAnatomia(chave) {
  const item = anatomiaData[chave];
  const mapaContainer = document.getElementById('container-mapa-olho');

  if (item) {
    document.getElementById('titulo-anatomia').innerText = item.titulo;
    document.getElementById('conteudo-anatomia').innerHTML = `<p>${item.texto}</p>`;
    
    // Mostra o container da imagem apenas ao clicar em "Anatomia do Olho"
    if (chave === 'olho') {
      mapaContainer.style.display = 'block';
    } else {
      mapaContainer.style.display = 'none';
    }
  }
}

// BANCO DE DADOS DETALHADO DA IMAGEM DO OLHO
const olhoData = {
  cristalino: {
    titulo: "Cristalino",
    texto: "O cristalino é a lente natural e flexível do olho humano, localizada logo atrás da pupila, cuja função principal é convergir os raios de luz para formar imagens nítidas na retina. Ele altera sua forma dinamicamente para alternar o foco entre objetos próximos e distantes (processo chamado de acomodação), mas perde essa elasticidade com a idade (causando a presbiopia) e pode se tornar opaco ao longo dos anos, gerando a catarata."
  },
  cornea: {
    titulo: "Córnea",
    texto: "Camada transparente e protetora que cobre a frente do olho. Atua como a primeira e mais potente lente do sistema óptico ocular, refratando a luz para que ela entre na pupila."
  },
  pupila: {
    titulo: "Pupila",
    texto: "Abertura central da íris por onde a luz entra no olho. Seu diâmetro muda automaticamente conforme a intensidade da luz do ambiente."
  },
  iris: {
    titulo: "Íris",
    texto: "Parte colorida do olho. Contém músculos que dilatam ou contraem a pupila para regular a quantidade de luz que chega à retina."
  },
  corpo_ciliar: {
    titulo: "Corpo Ciliar",
    texto: "Estrutura muscular responsável por alterar o formato do cristalino durante o processo de acomodação visual, além de produzir o humor aquoso."
  },
  ligamentos: {
    titulo: "Ligamentos Suspensores",
    texto: "Fibras delgadas que conectam o corpo ciliar ao cristalino, mantendo-o na posição correta e transmitindo a tensão necessária para mudar seu foco."
  },
  humor_vitreo: {
    titulo: "Humor Vítreo",
    texto: "Substância gelatinosa e transparente que preenche a cavidade posterior do olho, mantendo a forma esférica do globo ocular e pressionando a retina contra a parede posterior."
  },
  esclerotica: {
    titulo: "Esclerótica",
    texto: "Camada externa fibrosa e resistente do olho (conhecida como o 'branco do olho'). Oferece proteção mecânica e sustenta o formato do globo ocular."
  },
  coroide: {
    titulo: "Coróide",
    texto: "Camada vascularizada entre a esclerótica e a retina, rica em vasos sanguíneos que fornecem oxigênio e nutrientes para os tecidos oculares."
  },
  retina: {
    titulo: "Retina",
    texto: "Camada sensível à luz localizada no fundo do olho. Contém células fotorreceptoras (cones e bastonetes) que transformam a luz em impulsos elétricos."
  },
  macula: {
    titulo: "Mácula Lútea",
    texto: "Pequena área amarelada no centro da retina, responsável pela visão central de alta resolução, essencial para leitura e reconhecimento de rostos."
  },
  fovea: {
    titulo: "Fóvea",
    texto: "Ponto focal central localizado no meio da mácula lútea. Possui a maior densidade de cones do olho, proporcionando a máxima nitidez e percepção de cores."
  },
  nervo_optico: {
    titulo: "Nervo Óptico",
    texto: "Feixe de fibras nervosas que transporta os sinais elétricos gerados pela retina até o córtex visual do cérebro, onde a imagem é finalmente processada."
  },
  ponto_cego: {
    titulo: "Ponto Cego",
    texto: "Região da retina onde o nervo óptico se conecta. Como não possui células fotorreceptoras (cones ou bastonetes), não consegue detectar a luz que incide diretamente sobre ele."
  }
};

// FUNÇÃO PARA EXIBIR A DEFINIÇÃO AO CLICAR NOS BALÕES DA IMAGEM
function mostrarInfoOlho(chave) {
  const item = olhoData[chave];
  if (item) {
    document.getElementById('titulo-info-olho').innerText = item.titulo;
    document.getElementById('texto-info-olho').innerText = item.texto;
  }
}


// BANCO DE DADOS 5: DEFICIÊNCIAS VISUAIS
const deficienciaData = {
 miopia: {
   titulo: "Miopia",
   texto: "O globo ocular é mais longo que o normal, fazendo com que a imagem se forme antes da retina. Dificuldade para enxergar de longe. Correção: Lentes Divergentes."
 },
 hipermetropia: {
   titulo: "Hipermetropia",
   texto: "O globo ocular é mais curto que o normal, fazendo a imagem se formar atrás da retina. Dificuldade para enxergar de perto. Correção: Lentes Convergentes."
 },
 astigmatismo: {
   titulo: "Astigmatismo",
   texto: "Irregularidade na curvatura da córnea, gerando múltiplos pontos de foco. A imagem fica embaçada tanto de perto quanto de longe. Correção: Lentes Cilíndricas."
 },
 cegueira: {
   titulo: "Cegueira e Baixa Visão",
   texto: "A baixa visão é a perda parcial irreparável da visão; a cegueira total é a ausência de percepção de luz. Ambas demandam recursos e tecnologias assistivas."
 },
 patologias: {
   titulo: "Patologias Oculares",
   texto: "Doenças como Catarata (opacificação do cristalino), Glaucoma (aumento da pressão intraocular) e Degeneração Macular afetam a qualidade da visão."
 },
 daltonismo: {
   titulo: "Daltonismo",
   texto: "Condição genética que altera a sensibilidade dos cones na retina, dificultando a distinção de certas cores (principalmente vermelho e verde)."
 },
 oculos: {
   titulo: "Funcionamento das Lentes",
   texto: "Lentes ópticas alteram a trajetória dos raios luminosos por refração para ajustar a formação do foco exatamente sobre a retina."
 }
};


// BANCO DE DADOS 6: TECNOLOGIAS ASSISTIVAS E IA
const assistivaData = {
 oculos_inteligentes: {
   titulo: "Óculos Inteligentes",
   texto: "Equipados com câmeras e IA para ler textos, reconhecer rostos, identificar objetos e narrar em tempo real pelo fone de ouvido."
 },
 apps_acessibilidade: {
   titulo: "Aplicativos de Acessibilidade",
   texto: "Apps como Be My Eyes e Seeing AI que auxiliam no reconhecimento de notas de dinheiro, cores, textos e produtos em supermercados."
 },
 ia: {
   titulo: "Visão Computacional",
   texto: "Algoritmos de aprendizado profundo que processam imagens do ambiente e convertem a cena visual em descrições em áudio."
 },
 recursos_ia: {
   titulo: "Recursos de IA",
   texto: "Ferramentas integradas ao sistema operacional que geram áudios descritivos automáticos para imagens na internet."
 },
 assistivas: {
   titulo: "Dispositivos Assistivos",
   texto: "Linhas Braille dinâmicas, bengalas inteligentes com sensores ultrassônicos e leitores de tela com voz sintetizada."
 },
 curiosidades: {
   titulo: "Gestos em Celulares",
   texto: "Sistemas como TalkBack (Android) e VoiceOver (iOS) utilizam gestos específicos na tela de toque para navegação totalmente sem visão."
 }
};


// BANCO DE DADOS 7: FÍSICA E O SOM
const somData = {
 ecolocalizacao: {
   titulo: "Ecolocalização Humana",
   texto: "Capacidade de emitir estalos com a língua e interpretar as ondas sonoras refletidas pelos obstáculos para mapear o espaço ao redor."
 },
 audiodescricao: {
   titulo: "Audiodescrição",
   texto: "Técnica de tradução visual que descreve verbalmente imagens, filmes, teatro e obras de arte para pessoas cegas."
 },
 ultrassom: {
   titulo: "Sensores de Ultrassom",
   texto: "Dispositivos que emitem ondas sonoras de alta frequência inacessíveis ao ouvido humano para medir distâncias e alertar sobre obstáculos."
 },
 voz: {
   titulo: "Leitores de Tela",
   texto: "Softwares como NVDA e JAWS que convertem o texto na tela do computador/celular em síntese de voz."
 }
};


// BANCO DE DADOS 8: CURIOSIDADES CIENTÍFICAS
const curiosidadesData = {
 smartphone: {
   titulo: "Como Pessoas Cegas Usam Smartphone?",
   texto: "Através de leitores de tela integrados (VoiceOver e TalkBack) que leem o conteúdo sob o toque do usuário com rapidez impressionante."
 },
 braille: {
   titulo: "O Sistema Braille",
   texto: "Criado por Louis Braille em 1825, baseia-se em uma cela tátil de 6 pontos relevados permitindo 64 combinações de letras e símbolos."
 },
 caes_guia: {
   titulo: "Cães-Guia",
   texto: "Animais altamente treinados para desviar de obstáculos aéreos e terrestres, indicar degraus e ajudar na travessia segura de ruas."
 },
 semaforo: {
   titulo: "Semáforo Sonoro",
   texto: "Sinais de trânsito que emitem sons bip em ritmos e frequências diferentes para avisar o momento seguro de atravessar."
 },
 ia_acessibilidade: {
   titulo: "IA na Acessibilidade",
   texto: "Modelos de linguagem avançados analisam fotos complexas e descrevem detalhes sutis de expressões emocionais e vestuário."
 }
};


// BANCO DE DADOS 9: EXPERIMENTOS ÓPTICOS
const experimentoData = {
 refracao: {
   titulo: "Refração na Água",
   texto: "Ao colocar um lápis dentro de um copo com água, ele parece quebrado devido à mudança da velocidade da luz ao mudar de meio."
 },
 reflexao: {
   titulo: "Reflexão em Espelhos Planos",
   texto: "Demonstração das leis da reflexão: o ângulo de incidência é sempre igual ao ângulo de reflexão em relação à normal."
 },
 lentes: {
   titulo: "Lentes de Aumento",
   texto: "Uso de lentes convergentes para focar raios de luz paralelos no ponto focal, aumentando o tamanho aparente do objeto."
 },
 difracao: {
   titulo: "Difração com CD/DVD",
   texto: "Os sulcos microscópicos na superfície de um CD atuam como uma rede de difração, decompondo a luz branca nas cores do arco-íris."
 },
 cores: {
   titulo: "Disco de Newton",
   texto: "Ao girar rapidamente um disco pintado com as cores do espectro, a sobreposição das imagens na retina forma o branco."
 },
 ilusao: {
   titulo: "Ilusão de Óptica",
   texto: "Demonstra como o cérebro processa e interpreta atalhos visuais, podendo enganar nossa percepção do espaço e movimento."
 }
};


// BANCO DE DADOS 10: VOCÊ SABIA?
const voceSabiaData = {
 cores: {
   titulo: "Percepção de Cores",
   texto: "Sabia que os cães não enxergam em preto e branco? Eles possuem visão dicromática, enxergando tons de azul e amarelo!"
 },
 smartphones: {
   titulo: "Autonomia Digital",
   texto: "Smartphones modernos contam com recursos nativos de acessibilidade que permitem o uso completo sem olhar para a tela."
 },
 ia_fotos: {
   titulo: "Descrição de Fotos por IA",
   texto: "Algoritmos modernos conseguem descrever uma foto em detalhes em menos de 1 segundo para um leitor de tela."
 }
};


// BANCO DE DADOS 12: DESAFIOS PARA OS VISITANTES
const desafioData = {
 som: {
   titulo: "Identificar Objetos pelo Som",
   texto: "Feche os olhos e tente reconhecer materiais (moedas, chaves, papéis) apenas pelo som emitido ao manuseá-los."
 },
 leitor: {
   titulo: "Leitor de Tela na Prática",
   texto: "Tente ativar o recurso TalkBack ou VoiceOver do seu celular por 5 minutos mantendo os olhos fechados."
 },
 caminhada: {
   titulo: "Caminhada Guiada com Venda",
   texto: "Em duplas, um participante usa venda enquanto o outro orienta o trajeto por um ambiente seguro apenas com toques e voz."
 },
 localizacao: {
   titulo: "Localização Espacial pelo Som",
   texto: "Tente identificar de qual direção (frente, trás, esquerda, direita) vem um estalar de dedos com os olhos vendados."
 }
};


// BANCO DE DADOS 13: NOTÍCIAS E TECNOLOGIAS ATUAIS
const noticiaData = {
 oculos_ia: {
   titulo: "Novos Óculos Inteligentes",
   texto: "Inovações recentes integram assistentes de inteligência artificial generativa em óculos leves e discretos."
 },
 visao_artificial: {
   titulo: "Visão Artificial e Implantes",
   texto: "Avanços em próteses biónicas e implantes retinianos começam a devolver a percepção de focos de luz a pessoas cegas."
 },
 ia_oftalmo: {
   titulo: "IA na Medicina Oftalmológica",
   texto: "Sistemas de IA já detectam sinais de glaucoma e retinopatia diabética em exames de fundo de olho com alta precisão."
 }
};


// BANCO DE DADOS 14: MITOS E VERDADES
const mitosData = {
 mito1: {
   titulo: "Ler no escuro causa cegueira?",
   resposta: "Mito.",
   ciencia: "Ler com pouca luz não causa danos físicos permanentes aos olhos nem leva à cegueira. O que acontece é a fadiga ocular (astenopia). No escuro, suas pupilas se dilatam e os músculos dos olhos trabalham muito mais para focar nas palavras, o que pode causar dor de cabeça, olhos secos e cansaço visual, mas os olhos se recuperam após o descanso."
 },
 mito2: {
   titulo: "Usar óculos faz o grau aumentar?",
   resposta: "Mito.",
   ciencia: "Os óculos apenas mudam o ângulo em que a luz entra no olho para focar corretamente na retina; eles não alteram a anatomia do globo ocular. O grau de condições como miopia ou astigmatismo muda devido ao crescimento natural do olho ou ao envelhecimento natural do cristalino (presbiopia), independentemente de você usar óculos ou não."
 },
 mito3: {
   titulo: "Toda pessoa cega enxerga apenas preto?",
   resposta: "Mito.",
   ciencia: "A cegueira é um espectro. Apenas cerca de 10% a 15% das pessoas com deficiência visual têm amaurose (cegueira total, ausência de percepção de luz). A grande maioria tem visão subnormal, podendo perceber luzes, sombras, vultos ou até cores. Além disso, pessoas com cegueira total de nascença não 'veem preto', elas simplesmente não veem nada — o cérebro não processa estímulos visuais."
 }
};




// ==========================================
// FUNÇÕES DE INTERAÇÃO (CLIQUE DOS BOTÕES)
// ==========================================


function mostrarTeoria(chave) {
 const item = teoriasData[chave];
 if (item) {
   document.getElementById('titulo-teoria').innerText = item.titulo;
   document.getElementById('conteudo-teoria').innerHTML = `<p>${item.texto}</p>`;
 }
}


function alternarArtigo() {
 const conteudoadicional = document.getElementById('mais-conteudo-artigo');
 const btn = document.getElementById('btn-ler-mais');
  if (conteudoadicional.style.display === 'none' || conteudoadicional.style.display === '') {
   conteudoadicional.style.display = 'block';
   btn.innerText = 'Ler menos';
 } else {
   conteudoadicional.style.display = 'none';
   btn.innerText = 'Ler artigo completo';
 }
}


function mudarContexto(chave) {
 const item = contextosData[chave];
 if (item) {
   document.getElementById('titulo-contexto').innerText = item.titulo;
   document.getElementById('conteudo-contexto').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarAnatomia(chave) {
 const item = anatomiaData[chave];
 if (item) {
   document.getElementById('titulo-anatomia').innerText = item.titulo;
   document.getElementById('conteudo-anatomia').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarDeficiencia(chave) {
 const item = deficienciaData[chave];
 if (item) {
   document.getElementById('titulo-deficiencia').innerText = item.titulo;
   document.getElementById('conteudo-deficiencia').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarAssistiva(chave) {
 const item = assistivaData[chave];
 if (item) {
   document.getElementById('titulo-assistiva').innerText = item.titulo;
   document.getElementById('conteudo-assistiva').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarSom(chave) {
 const item = somData[chave];
 if (item) {
   document.getElementById('titulo-som').innerText = item.titulo;
   document.getElementById('conteudo-som').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarCuriosidade(chave) {
 const item = curiosidadesData[chave];
 if (item) {
   document.getElementById('titulo-curiosidade').innerText = item.titulo;
   document.getElementById('conteudo-curiosidade').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarExperimento(chave) {
 const item = experimentoData[chave];
 if (item) {
   document.getElementById('titulo-experimento').innerText = item.titulo;
   document.getElementById('conteudo-experimento').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarVoceSabia(chave) {
 const item = voceSabiaData[chave];
 if (item) {
   document.getElementById('titulo-vocesabia').innerText = item.titulo;
   document.getElementById('conteudo-vocesabia').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarDesafio(chave) {
 const item = desafioData[chave];
 if (item) {
   document.getElementById('titulo-desafio').innerText = item.titulo;
   document.getElementById('conteudo-desafio').innerHTML = `<p>${item.texto}</p>`;
 }
}


function mostrarNoticia(chave) {
 const item = noticiaData[chave];
 if (item) {
   document.getElementById('titulo-noticia').innerText = item.titulo;
   document.getElementById('conteudo-noticia').innerHTML = `<p>${item.texto}</p>`;
 }
}


// FUNÇÃO DO TÓPICO 14: MITOS E VERDADES
function mostrarMito(chave) {
 const item = mitosData[chave];
 if (item) {
   document.getElementById('titulo-mito').innerText = item.titulo;
   document.getElementById('conteudo-mito').innerHTML = `
     <p><strong>Resultado:</strong> ${item.resposta}</p>
     <p><strong>Explicação Científica:</strong> ${item.ciencia}</p>
   `;
 }
}
