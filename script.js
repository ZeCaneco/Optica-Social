// BANCO DE DADOS 1: HISTÓRIA DA LUZ
const teorias = {
  antiguidade: {
    titulo: "Antiguidade (Grécia Antiga)",
    texto: "Filósofos gregos acreditavam que a luz era formada por pequenas partículas que se propagavam em linha reta em alta velocidade, ou pela emissão de feixes que saíam dos olhos e tocavam os objetos."
  },
  huygens: {
    titulo: "Christiaan Huygens (1678)",
    texto: "Propôs a Teoria Ondulatória da luz. Explicou a reflexão e a refração com o princípio de que cada ponto de uma frente de onda gera novas ondulações menores. Na refração, a luz muda de velocidade ao trocar de meio (ex: do ar para a água)."
  },
  newton: {
    titulo: "Isaac Newton (1704)",
    texto: "Defendeu a Teoria Corpuscular (luz formada por partículas). Ficou célebre ao decompor a luz branca com um prisma nas cores do arco-íris e demonstrar que a luz branca é uma mistura de todas as cores."
  },
  young: {
    titulo: "Thomas Young (1801)",
    texto: "Realizou o experimento da dupla fenda, demonstrando os fenômenos de interferência e difração da luz, o que fortaleceu decisivamente a Teoria Ondulatória."
  },
  maxwell: {
    titulo: "James Clerk Maxwell (1865)",
    texto: "Unificou o eletromagnetismo e a óptica, demonstrando matematicamente que a luz é uma onda eletromagnética formada por campos elétricos e magnéticos oscilantes."
  },
  einstein: {
    titulo: "Albert Einstein (1905)",
    texto: "Explicou o Efeito Fotoelétrico introduzindo os quanta de luz (fótons). Ele provou que a energia da luz depende de sua frequência e que ela possui comportamento corpuscular."
  },
  debroglie: {
    titulo: "Louis de Broglie (1924)",
    texto: "Formulou a Dualidade Onda-Partícula: a luz e a matéria possuem natureza dupla, agindo como onda ou partícula a depender do fenômeno observado."
  }
};

// BANCO DE DADOS 2: CONTEXTOS SOCIAIS
const contextos = {
  residencial: {
    titulo: "Contexto Residencial (Conforto e Visão)",
    texto: "<ul>" +
             "<li><strong>Óculos e Lentes de Contato:</strong> Corrigem o ponto focal na retina usando refração nas lentes.</li>" +
             "<li><strong>Espelhos Planos e Côncavos:</strong> Refletem a luz. Os espelhos côncavos aproximam os raios para ampliar a imagem (maquiagem e barbear).</li>" +
             "<li><strong>Câmeras de Celular:</strong> Conjuntos de mini-lentes que refratam a luz em direção a um sensor digital.</li>" +
           "</ul>"
  },
  comercial: {
    titulo: "Contexto Comercial (Automação e Comunicação)",
    texto: "<ul>" +
             "<li><strong>Leitores de Código de Barras:</strong> Emitem laser onde barras escuras absorvem a luz e claras a refletem, gerando dados digitais.</li>" +
             "<li><strong>Cabos de Fibra Óptica:</strong> Transmitem dados em altíssima velocidade via reflexão interna total no vidro.</li>" +
             "<li><strong>Câmeras de Segurança:</strong> Utilizam lentes de foco e luz infravermelha para visão noturna.</li>" +
           "</ul>"
  },
  escolar: {
    titulo: "Contexto Escolar e Acadêmico",
    texto: "<ul>" +
             "<li><strong>Microscópios Ópticos:</strong> Associam lentes convergentes (ocular e objetiva) para ampliar estruturas microscópicas.</li>" +
             "<li><strong>Projetores (Data Show):</strong> Usam lâmpadas/lasers, prismas e lentes para refratar e projetar imagens ampliadas.</li>" +
             "<li><strong>Lupas:</strong> Lentes convergentes simples que produzem uma imagem virtual e ampliada.</li>" +
           "</ul>"
  },
  industrial: {
    titulo: "Contexto Industrial (Precisão e Segurança)",
    texto: "<ul>" +
             "<li><strong>Corte e Solda a Laser:</strong> Concentram um feixe de luz de alta intensidade para derreter ou cortar materiais rígidos.</li>" +
             "<li><strong>Sensores de Barreira Óptica:</strong> Feixes de luz contínuos que, ao serem interrompidos, acionam alarmes ou desligam máquinas.</li>" +
             "<li><strong>Espectrômetros:</strong> Medem a absorção de luz para identificar a composição química de materiais.</li>" +
           "</ul>"
  }
};

// BANCO DE DADOS 3: ANATOMIA E FÍSICA DA VISÃO
const anatomiaVisao = {
  olho: {
    titulo: "Anatomia do Olho Humano",
    texto: "<p>O olho humano é composto por três camadas principais:</p>" +
           "<ul>" +
             "<li><strong>Túnica Fibrosa:</strong> Córnea (camada clara frontal que foca a luz) e Esclera (parte branca de proteção).</li>" +
             "<li><strong>Túnica Vascular:</strong> Íris (controla entrada de luz), Pupila (abertura central), Cristalino (lente ajustável) e Corpo Ciliar.</li>" +
             "<li><strong>Camada Interna:</strong> Retina (transdução da luz em impulsos elétricos), Humor Vítreo (gel interno) e Nervo Óptico.</li>" +
           "</ul>"
  },
  imagem: {
    titulo: "Formação da Imagem na Retina",
    texto: "Os raios luminosos atravessam a córnea e o cristalino (lentes convergentes), que projetam uma imagem <strong>real, menor e invertida</strong> na retina. Células fotorreceptoras (cones e bastonetes) convertem os estímulos luminosos em impulsos elétricos."
  },
  nervo: {
    titulo: "Papel do Nervo Óptico",
    texto: "Funciona como um cabo biológico de transmissão de alta velocidade, transportando os impulsos elétricos da retina até o córtex visual no cérebro, onde as imagens dos dois olhos são processadas, invertidas para a posição correta e combinadas em 3D."
  },
  espectro: {
    titulo: "Espectro Eletromagnético e Luz Visível",
    texto: "A luz visível é a estreita faixa do espectro eletromagnético que o olho humano consegue detectar, estendendo-se aproximadamente de 400 nm (violeta) a 700 nm (vermelho). Propaga-se no vácuo a cerca de 300.000 km/s."
  },
  fenomenos: {
    titulo: "Reflexão e Refração da Luz",
    texto: "<p><strong>Reflexão:</strong> A luz incide em uma superfície e retorna ao meio de origem (especular em espelhos ou difusa em objetos opacos).</p>" +
           "<p><strong>Refração:</strong> Mudança de velocidade e direção da luz ao passar de um meio transparente para outro (regida pela Lei de Snell-Descartes).</p>"
  },
  cores: {
    titulo: "Formação das Cores",
    texto: "A luz branca é a soma de todas as cores. Um objeto possui determinada cor porque absorve certas frequências e reflete outras até nossos olhos. O objeto vermelho absorve todas as frequências e reflete apenas o vermelho. Os cones na retina decodificam essas variações."
  }
};

// BANCO DE DADOS 4: DEFICIÊNCIAS E CORREÇÃO ÓPTICA
const deficienciasEGaleria = {
  cegueira: {
    titulo: "Cegueira e Baixa Visão",
    texto: "<p><strong>Cegueira:</strong> Interrupção total do percurso ou processamento do estímulo luminoso (por opacidade dos meios transparentes ou danos no nervo óptico/retina).</p>" +
           "<p><strong>Baixa Visão:</strong> Redução severa da função visual que impede o foco nítido mesmo com óculos convencionais, exigindo recursos de ampliação e alto contraste.</p>"
  },
  patologias: {
    titulo: "Catarata, Glaucoma e Degeneração Macular",
    texto: "<ul>" +
             "<li><strong>Catarata:</strong> Opacificação do cristalino; espalha caoticamente os fótons da luz.</li>" +
             "<li><strong>Glaucoma:</strong> Alta pressão intraocular que esmaga as fibras do nervo óptico, gerando visão em túnel.</li>" +
             "<li><strong>Degeneração Macular:</strong> Lesão no centro da retina (mácula), causando manchas no ponto focal central.</li>" +
           "</ul>"
  },
  daltonismo: {
    titulo: "Daltonismo",
    texto: "Disfunção ou ausência de tipos específicos de cones na retina (receptores de ondas curtas, médias ou longas), fazendo com que o cérebro confunda cores vizinhas, como o verde e o vermelho."
  },
  oculos: {
    titulo: "Funcionamento das Lentes (Miopia e Hipermetropia)",
    texto: "<ul>" +
             "<li><strong>Lentes Convergentes (Hipermetropia):</strong> Mais grossas no centro. Adiantam o ponto focal para que a imagem não se forme atrás da retina.</li>" +
             "<li><strong>Lentes Divergentes (Miopia):</strong> Mais grossas nas bordas. Afastam os raios para empurrar o ponto focal de volta para a retina.</li>" +
           "</ul>"
  }
};

// BANCO DE DADOS 5: TECNOLOGIAS ASSISTIVAS E IA
const tecnologiasAssistivasIA = {
  ia: {
    titulo: "Visão Computacional e Inteligência Artificial",
    texto: "A Visão Computacional ensina sistemas a interpretarem padrões de luz, cores e formas. Câmeras capturam o ambiente e a IA traduz as imagens instantaneamente em respostas de áudio para o usuário."
  },
  recursos_ia: {
    titulo: "Recursos Práticos de IA",
    texto: "<ul>" +
             "<li><strong>Reconhecimento de Objetos:</strong> Aponta itens no espaço (ex: 'cadeira a dois passos').</li>" +
             "<li><strong>Leitura de Texto (OCR):</strong> Transforma textos de placas, livros e cardápios em voz alta.</li>" +
             "<li><strong>Reconhecimento Facial:</strong> Mapeia traços do rosto para anunciar a chegada de conhecidos.</li>" +
             "<li><strong>Identificação de Cédulas:</strong> Reconhece cores e valores de dinheiro para evitar fraudes.</li>" +
           "</ul>"
  },
  assistivas: {
    titulo: "Guias de Tecnologias Assistivas",
    texto: "<ul>" +
             "<li><strong>Leitores de Tela:</strong> Softwares como NVDA, JAWS, VoiceOver e TalkBack convertem conteúdo em fala.</li>" +
             "<li><strong>Linhas e Impressoras Braille:</strong> Dispositivos eletromecânicos que projetam ou estampam pinos táticos.</li>" +
             "<li><strong>Lupas Eletrônicas e Óculos Smart:</strong> Aparelhos como OrCam MyEye com microcâmera e áudio integrado.</li>" +
           "</ul>"
  },
  curiosidades: {
    titulo: "Curiosidades e Acessibilidade no Celular",
    texto: "Pessoas cegas usam smartphones de tela sensível ao toque através de exploração tátil e varredura por gestos (ex: duplo toque para ativar), ouvindo a síntese de áudio em frequências muito aceleradas adaptadas ao cérebro."
  }
};

// --- FUNÇÕES DE INTERAÇÃO ---

function alternarArtigo() {
  const conteudo = document.getElementById('mais-conteudo-artigo');
  const botao = document.getElementById('btn-ler-mais');

  if (conteudo.style.display === 'block') {
    conteudo.style.display = 'none';
    botao.textContent = 'Ler artigo completo';
  } else {
    conteudo.style.display = 'block';
    botao.textContent = 'Ocultar artigo';
  }
}

function mostrarTeoria(chave) {
  const titulo = document.getElementById('titulo-teoria');
  const conteudo = document.getElementById('conteudo-teoria');

  if (teorias[chave]) {
    titulo.textContent = teorias[chave].titulo;
    conteudo.innerHTML = `<p>${teorias[chave].texto}</p>`;
  }
}

function mudarContexto(chave) {
  const titulo = document.getElementById('titulo-contexto');
  const conteudo = document.getElementById('conteudo-contexto');

  if (contextos[chave]) {
    titulo.textContent = contextos[chave].titulo;
    conteudo.innerHTML = contextos[chave].texto;
  }
}

function mostrarAnatomia(chave) {
  const titulo = document.getElementById('titulo-anatomia');
  const conteudo = document.getElementById('conteudo-anatomia');

  if (anatomiaVisao[chave]) {
    titulo.textContent = anatomiaVisao[chave].titulo;
    conteudo.innerHTML = anatomiaVisao[chave].texto;
  }
}

function mostrarDeficiencia(chave) {
  const titulo = document.getElementById('titulo-deficiencia');
  const conteudo = document.getElementById('conteudo-deficiencia');

  if (deficienciasEGaleria[chave]) {
    titulo.textContent = deficienciasEGaleria[chave].titulo;
    conteudo.innerHTML = deficienciasEGaleria[chave].texto;
  }
}

function mostrarAssistiva(chave) {
  const titulo = document.getElementById('titulo-assistiva');
  const conteudo = document.getElementById('conteudo-assistiva');

  if (tecnologiasAssistivasIA[chave]) {
    titulo.textContent = tecnologiasAssistivasIA[chave].titulo;
    conteudo.innerHTML = tecnologiasAssistivasIA[chave].texto;
  }
}