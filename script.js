// BANCO DE DADOS 1: EVOLUÇÃO HISTÓRICA
const teoriasData = {
  antiguidade: {
    titulo: "Antiguidade Clássica (Euclides e Ptolomeu)",
    texto: "Na Grécia Antiga, acreditava-se na teoria da emissão (ou extramissão), onde o olho emitia raios de luz que 'tocavam' os objetos para enxergá-los. Mais tarde, Alhazen (Ibn al-Haytham) revolucionou a óptica ao provar que a luz viaja dos objetos até nossos olhos."
  },
  huygens: {
    titulo: "Christiaan Huygens (1678) - Teoria Ondulatória",
    texto: "Huygens propôs que a luz se comporta como uma onda mecânica se propagando por um meio hipotético chamado 'éter'. Sua teoria explicava muito bem fenômenos como reflexão e refração."
  },
  newton: {
    titulo: "Isaac Newton (1704) - Teoria Corpuscular",
    texto: "Newton defendia que a luz era composta por pequenas partículas (corpúsculos) emitidas por fontes luminosas. Ele explicou a decomposição da luz branca nos prismas, embora sua teoria falhasse em explicar a difração."
  },
  young: {
    titulo: "Thomas Young (1801) - Experimento da Fenda Dupla",
    texto: "Young demonstrou conclusivamente o fenômeno da interferência luminosa através do famoso experimento da fenda dupla, provando a natureza ondulatória da luz e enfraquecendo a teoria corpuscular de Newton."
  },
  maxwell: {
    titulo: "James Clerk Maxwell (1865) - Eletromagnetismo",
    texto: "Maxwell unificou a eletricidade, o magnetismo e a óptica ao demonstrar matematicamente que a luz é uma onda eletromagnetica que se propaga no vácuo com velocidade constante."
  },
  einstein: {
    titulo: "Albert Einstein (1905) - Efeito Fotoelétrico",
    texto: "Einstein explicou o efeito fotoelétrico sugerindo que a luz é emitida e absorvida em pacotes discretos de energia chamados 'quanta' de luz (mais tarde chamados de fótons), reacendendo a ideia de partícula."
  },
  debroglie: {
    titulo: "Louis de Broglie (1924) - Dualidade Onda-Partícula",
    texto: "De Broglie estabeleceu a física quântica moderna ao demonstrar que a luz (e a matéria) possui natureza dual: comporta-se tanto como onda quanto como partícula, dependendo do experimento realizado."
  }
};

function mostrarTeoria(chave) {
  const titulo = document.getElementById('titulo-teoria');
  const conteudo = document.getElementById('conteudo-teoria');
  if (teoriasData[chave]) {
    titulo.textContent = teoriasData[chave].titulo;
    conteudo.innerHTML = `<p>${teoriasData[chave].texto}</p>`;
  }
}

// ALTERNAR LEITURA DO ARTIGO
function alternarArtigo() {
  const maisConteudo = document.getElementById('mais-conteudo-artigo');
  const btn = document.getElementById('btn-ler-mais');
  if (maisConteudo.style.display === 'none' || maisConteudo.style.display === '') {
    maisConteudo.style.display = 'block';
    btn.textContent = 'Ler menos';
  } else {
    maisConteudo.style.display = 'none';
    btn.textContent = 'Ler artigo completo';
  }
}

// BANCO DE DADOS 3: CONTEXTOS SOCIAIS
const contextosData = {
  residencial: {
    titulo: "Ambiente Residencial",
    texto: "Lâmpadas LED energeticamente eficientes utilizam semicondutores para emissão de luz. Telas de TV e smartphones empregam tecnologia OLED ou LCD para emissão direta de fótons coloridos. Espelhos planos aplicam as leis da reflexão regular."
  },
  comercial: {
    titulo: "Ambiente Comercial",
    texto: "Leitores de código de barras em caixas funcionam por meio de lasers que detectam a reflexão diferencial nas barras pretas e brancas. Iluminação direcionada cria foco visual em produtos usando refletores parabólicos."
  },
  escolar: {
    titulo: "Ambiente Escolar",
    texto: "Projetores utilizam lentes convergentes para ampliar imagens de matrizes digitais na tela. Microscópios nos laboratórios combinam duas ou mais lentes para aumentar o ângulo visual de estruturas celulares."
  },
  industrial: {
    titulo: "Ambiente Industrial",
    texto: "Sensores ópticos industriais usam fotocélulas para contagem de peças em esteiras. Lasers de alta potência realizam cortes de precisão em metais por meio de convergência de energia luminosa altamente focada."
  }
};

function mudarContexto(chave) {
  const titulo = document.getElementById('titulo-contexto');
  const conteudo = document.getElementById('conteudo-contexto');
  if (contextosData[chave]) {
    titulo.textContent = contextosData[chave].titulo;
    conteudo.innerHTML = `<p>${contextosData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 4: ANATOMIA E FÍSICA DA VISÃO
const anatomiaData = {
  como_luz_entra: {
    titulo: "Como a Luz Entra no Olho",
    texto: "A luz atravessa a córnea, passa pela pupila (cujo diâmetro é ajustado pela íris) e atravessa o cristalino. O cristalino foca os raios diretamente sobre a retina, criando uma imagem invertida que o cérebro posteriormente interpreta."
  },
  oque_e_luz: {
    titulo: "O que é Luz?",
    texto: "A luz é uma radiação eletromagnética cujos comprimentos de onda estão dentro do espectro visível (aproximadamente entre 380 nm e 750 nm), propaga-se no vácuo a cerca de 300.000 km/s."
  },
  olho: {
    titulo: "Anatomia do Olho Humano",
    texto: "Composta por Córnea (refração inicial), Íris (controle de luz), Pupila (abertura), Cristalino (lente ajustável), Retina (sensor de fótons), Cones (visão de cores) e Bastonetes (visão noturna e contornos)."
  },
  imagem: {
    titulo: "Formação da Imagem",
    texto: "O conjunto Córnea + Cristalino atua como uma lente convergente. A imagem formada na retina é real, invertida e menor que o objeto original."
  },
  nervo: {
    titulo: "Nervo Óptico",
    texto: "Os fotorreceptores da retina convertem os impulsos luminosos em sinais elétricos. O nervo óptico conduz esses impulsos até o córtex visual no cérebro, onde a imagem é invertida e processada."
  },
  espectro: {
    titulo: "Espectro e Luz Visível",
    texto: "A luz visível é apenas uma pequena fração do espectro eletromagnético, situado entre o infravermelho e o ultravioleta."
  },
  fenomenos: {
    titulo: "Reflexão e Refração no Olho",
    texto: "A refração ocorre quando a luz muda de velocidade ao passar do ar para a córnea e humor aquoso, permitindo a focagem perfeita do feixe luminoso na retina."
  },
  cores: {
    titulo: "Formação das Cores",
    texto: "A percepção de cores ocorre no cérebro a partir do estímulo de três tipos de cones na retina, sensíveis às faixas do Vermelho, Verde e Azul (sistema RGB natural)."
  }
};

function mostrarAnatomia(chave) {
  const titulo = document.getElementById('titulo-anatomia');
  const conteudo = document.getElementById('conteudo-anatomia');
  if (anatomiaData[chave]) {
    titulo.textContent = anatomiaData[chave].titulo;
    conteudo.innerHTML = `<p>${anatomiaData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 5: DEFICIÊNCIAS E ÓCULOS
const deficienciasData = {
  miopia: {
    titulo: "Miopia",
    texto: "Dificuldade para enxergar de longe. O olho é mais 'alongado' que o normal e a imagem se forma antes da retina. Correção: Lentes Divergentes (Côncavas)."
  },
  hipermetropia: {
    titulo: "Hipermetropia",
    texto: "Dificuldade para enxergar de perto. O olho é mais 'curto' e a imagem se forma atrás da retina. Correção: Lentes Convergentes (Convexas)."
  },
  astigmatismo: {
    titulo: "Astigmatismo",
    texto: "Irregularidade na curvatura da córnea que faz com que a luz se foque em múltiplos pontos, distorcendo a visão. Correção: Lentes Cilíndricas."
  },
  cegueira: {
    titulo: "Cegueira e Baixa Visão",
    texto: "A cegueira pode ser total ou parcial. Pessoas com baixa visão possuem acuidade reduzida que não pode ser totalmente corrigida com óculos comuns, necessitando de lupas ou recursos digitais."
  },
  patologias: {
    titulo: "Catarata, Glaucoma e Mácula",
    texto: "Catarata é a opacificação do cristalino. Glaucoma é o aumento da pressão intraocular que danifica o nervo óptico. Degeneração Macular afeta o centro da retina responsável pela visão de detalhes."
  },
  daltonismo: {
    titulo: "Daltonismo",
    texto: "Condição genética em que há alteração na sensibilidade dos cones, dificultando a distinção de certas cores (geralmente verde e vermelho)."
  },
  oculos: {
    titulo: "Funcionamento das Lentes",
    texto: "As lentes dos óculos alteram o trajeto dos raios de luz por meio do fenômeno da refração, fazendo com que o ponto focal coincida perfeitamente sobre a retina."
  }
};

function mostrarDeficiencia(chave) {
  const titulo = document.getElementById('titulo-deficiencia');
  const conteudo = document.getElementById('conteudo-deficiencia');
  if (deficienciasData[chave]) {
    titulo.textContent = deficienciasData[chave].titulo;
    conteudo.innerHTML = `<p>${deficienciasData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 6: TECNOLOGIAS ASSISTIVAS E IA
const assistivasData = {
  oculos_inteligentes: {
    titulo: "Óculos Inteligentes",
    texto: "Dispositivos equipados com câmeras e IA que capturam o ambiente em tempo real e narram para o usuário o que está ao seu redor (ex: OrCam MyEye)."
  },
  apps_acessibilidade: {
    titulo: "Aplicativos de Acessibilidade",
    texto: "Ferramentas para dispositivos móveis como 'Be My Eyes' (conecta voluntários via vídeo) e 'Seeing AI' (lê textos, reconhece notas de dinheiro e descreve cenas)."
  },
  ia: {
    titulo: "Visão Computacional e IA",
    texto: "Algoritmos de rede neural treinados para identificar objetos, pessoas, obstáculos e texto escrito em imagens capturadas por sensores ópticos."
  },
  recursos_ia: {
    titulo: "Recursos Práticos de IA",
    texto: "A IA é usada para gerar audiodescrições automáticas em tempo real, transcrever fala em texto e traduzir conteúdos de maneira fluida."
  },
  assistivas: {
    titulo: "Guias e Dispositivos Assistivos",
    texto: "Bengalas eletrônicas com sensores ultrassônicos que vibram para alertar sobre obstáculos aéreos ou distantes."
  },
  curiosidades: {
    titulo: "Gestos no Celular e Acessibilidade",
    texto: "Sistemas como TalkBack (Android) e VoiceOver (iOS) mudam os gestos do celular: um toque seleciona e fala o item, dois toques abrem o aplicativo."
  }
};

function mostrarAssistiva(chave) {
  const titulo = document.getElementById('titulo-assistiva');
  const conteudo = document.getElementById('conteudo-assistiva');
  if (assistivasData[chave]) {
    titulo.textContent = assistivasData[chave].titulo;
    conteudo.innerHTML = `<p>${assistivasData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 7: FÍSICA E O SOM
const somData = {
  ecolocalizacao: {
    titulo: "Ecolocalização Humana",
    texto: "Algumas pessoas cegas desenvolvem a capacidade de emitir estalos com a língua e escutar o eco do som refletido nos objetos, mapeando a distância e o tamanho dos obstáculos."
  },
  audiodescricao: {
    titulo: "Audiodescrição",
    texto: "Recurso que traduz imagens em palavras faladas, permitindo que pessoas cegas ou com baixa visão compreendam filmes, peças de teatro e eventos visuais."
  },
  ultrassom: {
    titulo: "Sensores Sonoros (Ultrassom)",
    texto: "Dispositivos emitindo pulsos de som imperceptíveis ao ouvido humano que medem o tempo de retorno do eco para calcular a distância exata de barreiras."
  },
  voz: {
    titulo: "Aplicativos de Voz e Leitores de Tela",
    texto: "Softwares sintetizadores de voz que transformam textos na tela em som audível, garantindo autonomia na navegação na internet e uso de computadores."
  }
};

function mostrarSom(chave) {
  const titulo = document.getElementById('titulo-som');
  const conteudo = document.getElementById('conteudo-som');
  if (somData[chave]) {
    titulo.textContent = somData[chave].titulo;
    conteudo.innerHTML = `<p>${somData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 8: CURIOSIDADES CIENTÍFICAS
const curiosidadeData = {
  smartphone: {
    titulo: "Como pessoas cegas usam smartphone?",
    texto: "Através de leitores de tela acoplados ao sistema operacional que navegam falando cada item selecionado, além de suporte a gestos específicos."
  },
  braille: {
    titulo: "Como funciona o Braille?",
    texto: "O Braille é um sistema tátil composto por células de 6 pontos relevados em matriz de 2x3, permitindo 64 combinações de letras, números e pontuações."
  },
  caes_guia: {
    titulo: "Treinamento de Cães-Guia",
    texto: "Passam por cerca de 2 anos de adestramento intenso para aprender desvio de obstáculos, desobediência inteligente (para proteger o dono) e rotas diárias."
  },
  semaforo: {
    titulo: "Semáforo Sonoro",
    texto: "Emite sinais sonoros em frequências e ritmos variados indicando quando é seguro ou proibido atravessar a rua."
  },
  ia_acessibilidade: {
    titulo: "IA na Acessibilidade",
    texto: "A Inteligência Artificial reconhece padrões visuais rapidamente e lê textos longos, notas de dinheiro ou reconhece rostos de conhecidos."
  }
};

function mostrarCuriosidade(chave) {
  const titulo = document.getElementById('titulo-curiosidade');
  const conteudo = document.getElementById('conteudo-curiosidade');
  if (curiosidadeData[chave]) {
    titulo.textContent = curiosidadeData[chave].titulo;
    conteudo.innerHTML = `<p>${curiosidadeData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 9: EXPERIMENTOS ÓPTICOS (COM VÍDEO)
const experimentosData = {
  refracao: {
    titulo: "Refração (Copo de Água)",
    texto: "Veja a luz mudar de direção ao passar do ar para a água e inverter a seta desenhada atrás do copo.",
    video: "video-refracao.mp4"
  },
  reflexao: {
    titulo: "Reflexão em Espelhos",
    texto: "Demonstração prática das leis da reflexão e formação de múltiplas imagens em espelhos angulares.",
    video: "video-reflexao.mp4"
  },
  lentes: {
    titulo: "Lentes de Aumento",
    texto: "Como lentes convergentes refratam os raios de luz focando-os para ampliar objetos.",
    video: "video-lentes.mp4"
  },
  difracao: {
    titulo: "Difração da Luz",
    texto: "A luz contornando obstáculos e gerando padrões de interferência em superfícies de CDs.",
    video: "video-difracao.mp4"
  },
  cores: {
    titulo: "Formação das Cores (Disco de Newton)",
    texto: "Ao girar o disco colorido rapidamente, as cores se sobrepõem formando a ilusão da cor branca.",
    video: "video-cores.mp4"
  },
  ilusao: {
    titulo: "Ilusão de Óptica",
    texto: "Como o cérebro e os olhos podem ser enganados por padrões específicos de luz e contraste.",
    video: "video-ilusao.mp4"
  }
};

function mostrarExperimento(chave) {
  const titulo = document.getElementById('titulo-experimento');
  const conteudo = document.getElementById('conteudo-experimento');
  if (experimentosData[chave]) {
    const exp = experimentosData[chave];
    titulo.textContent = exp.titulo;
    conteudo.innerHTML = `
      <p>${exp.texto}</p>
      <div style="margin-top: 15px;">
        <video controls style="width: 100%; max-width: 600px; border-radius: 8px;">
          <source src="${exp.video}" type="video/mp4">
          Seu navegador não suporta a exibição deste vídeo.
        </video>
      </div>
    `;
  }
}

// BANCO DE DADOS 10: VOCÊ SABIA?
const voceSabiaData = {
  cores: {
    titulo: "1. Você sabia que o olho humano consegue distinguir milhões de cores?",
    texto: "Sim. Estima-se que o olho humano seja capaz de perceber milhões de variações de cores, graças à ação das células da retina chamadas cones, que detectam diferentes comprimentos de onda da luz."
  },
  smartphones: {
    titulo: "2. Você sabia que pessoas cegas podem utilizar smartphones de forma independente?",
    texto: "Sim. Smartphones possuem recursos de acessibilidade, como leitores de tela, comandos por voz e gestos específicos, permitindo que pessoas cegas realizem chamadas, enviem mensagens, utilizem aplicativos, naveguem na internet e executem diversas tarefas de forma autônoma."
  },
  ia_fotos: {
    titulo: "3. Você sabia que alguns aplicativos utilizam inteligência artificial para descrever fotografias?",
    texto: "Sim. Alguns aplicativos usam inteligência artificial para identificar pessoas, objetos, animais, paisagens e textos presentes em imagens, gerando descrições em áudio que auxiliam pessoas com deficiência visual a compreender o conteúdo das fotografias."
  }
};

function mostrarVoceSabia(chave) {
  const titulo = document.getElementById('titulo-vocesabia');
  const conteudo = document.getElementById('conteudo-vocesabia');
  if (voceSabiaData[chave] && titulo && conteudo) {
    titulo.textContent = voceSabiaData[chave].titulo;
    conteudo.innerHTML = `<p>${voceSabiaData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 12: DESAFIOS PARA OS VISITANTES
const desafiosData = {
  som: {
    titulo: "Identificar Objetos pelo Som",
    texto: "<strong>Dinâmica:</strong> Coloque objetos dentro de caixas opacas e agite-os ou ative-os (ex: chaves, grãos de feijão em um pote, um relógio de corda, plástico amassado).<br><br><strong>Objetivo:</strong> O visitante deve adivinhar o que é sem olhar ou tocar, explorando o reconhecimento auditivo de texturas e materiais."
  },
  leitor: {
    titulo: "Leitor de Tela na Prática",
    texto: "<strong>Dinâmica:</strong> Configure um notebook ou smartphone com um leitor de tela ativado (como o NVDA para Windows, VoiceOver para Apple ou TalkBack para Android). Desligue o monitor ou cubra a tela.<br><br><strong>Objetivo:</strong> Peça para o visitante tentar abrir um aplicativo específico ou ler a primeira frase de um site de notícias apenas ouvindo a voz sintetizada do sistema."
  },
  caminhada: {
    titulo: "Caminhada Guiada com Venda",
    texto: "<strong>Dinâmica:</strong> Ensine a técnica correta de guia vidente: a pessoa com os olhos vendados deve segurar no cotovelo do colega que está guiando, um passo atrás. Monte um circuito simples com obstáculos leves (como cadeiras ou cones).<br><br><strong>Objetivo:</strong> Sentir na prática a importância da confiança e da comunicação clara ('degrau à frente', 'vire à esquerda')."
  },
  localizacao: {
    titulo: "Localização Espacial pelo Som",
    texto: "<strong>Dinâmica:</strong> Em uma sala silenciosa, vende o visitante e peça para ele apontar exatamente de onde vem um som (use um estalar de dedos ou um pequeno sino, mudando de posição ao redor dele).<br><br><strong>Objetivo:</strong> Ilustrar como a audição se torna uma ferramenta fundamental para o mapeamento e orientação espacial."
  }
};

function mostrarDesafio(chave) {
  const titulo = document.getElementById('titulo-desafio');
  const conteudo = document.getElementById('conteudo-desafio');
  if (desafiosData[chave] && titulo && conteudo) {
    titulo.textContent = desafiosData[chave].titulo;
    conteudo.innerHTML = `<p>${desafiosData[chave].texto}</p>`;
  }
}

// BANCO DE DADOS 13: NOTÍCIAS E TECNOLOGIAS ATUAIS
const noticiasData = {
  oculos_ia: {
    titulo: "Novos Óculos Inteligentes",
    texto: "Tecnologias como o OrCam MyEye é um óculos integrados com Inteligência Artificial (como modelos da Meta em parceria com a Ray-Ban) agora conseguem ler textos impressos em voz alta, reconhecer rostos de amigos, identificar produtos no supermercado e até descrever o ambiente ao redor para usuários com deficiência visual."
  },
  visao_artificial: {
    titulo: "Pesquisas em Visão Artificial e Implantes de Retina",
    texto: "O desenvolvimento de 'olhos biônicos' continua avançando. Sistemas como o Prima System (um microchip sem fio implantado sob a retina) e pesquisas com optogenética (que usa terapia gênica para tornar células do olho sensíveis à luz novamente) estão ajudando pessoas com doenças degenerativas, como a retinite pigmentosa, a recuperar a percepção de formas e luzes."
  },
  ia_oftalmo: {
    titulo: "Uso da IA na Medicina Oftalmológica",
    texto: "A Inteligência Artificial já é usada para analisar exames de fundo de olho de forma autônoma. Softwares aprovados por órgãos de saúde conseguem detectar sinais iniciais de retinopatia diabética ou glaucoma com precisão igual ou superior à de médicos humanos, permitindo tratamentos preventivos muito mais rápidos."
  }
};

function mostrarNoticia(chave) {
  const titulo = document.getElementById('titulo-noticia');
  const conteudo = document.getElementById('conteudo-noticia');
  if (noticiasData[chave] && titulo && conteudo) {
    titulo.textContent = noticiasData[chave].titulo;
    conteudo.innerHTML = `<p>${noticiasData[chave].texto}</p>`;
  }
}

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
    ciencia: "Os óculos apenas mudam o ângulo em que a luz entra no olho para focar corretamente na retina; eles não alteram a anatomia do globo ocular. O grau de condições como miopia ou astigmatismo muda devido ao crescimento natural do olho (especialmente na infância e adolescência) ou ao envelhecimento natural do cristalino (presbiopia), independentemente de você usar óculos ou não."
  },
  mito3: {
    titulo: "Toda pessoa cega enxerga apenas preto?",
    resposta: "Mito.",
    ciencia: "A cegueira é um espectro. Apenas cerca de 10% a 15% das pessoas com deficiência visual têm \"amaurose\" (cegueira total, ausência de percepção de luz). A grande maioria tem visão subnormal, podendo perceber luzes, sombras, vultos ou até cores. Além disso, pessoas com cegueira total de nascença não \"veem preto\", elas simplesmente não veem nada — é a mesma sensação que você tem ao tentar enxergar usando o seu cotovelo. O cérebro não processa estímulos visuais."
  }
};

function mostrarMito(chave) {
  const titulo = document.getElementById('titulo-mito');
  const conteudo = document.getElementById('conteudo-mito');
  if (mitosData[chave] && titulo && conteudo) {
    const item = mitosData[chave];
    titulo.textContent = item.titulo;
    conteudo.innerHTML = `
      <p><strong>Resposta:</strong> ${item.resposta}</p>
      <p style="margin-top: 10px;"><strong>Ciência:</strong> ${item.ciencia}</p>
    `;
  }
}