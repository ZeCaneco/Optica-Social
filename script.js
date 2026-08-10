// Banco de dados para a linha do tempo (História da Luz)
const teorias = {
  antiguidade: {
    titulo: "🏛️ Antiguidade (Grécia Antiga)",
    texto: "Pensadores como Euclides e Ptolomeu acreditavam na teoria da emissão: os olhos emitiam feixes de luz que 'tocavam' os objetos para que pudéssemos enxergar."
  },
  huygens: {
    titulo: "🌊 Christiaan Huygens (1678)",
    texto: "Propôs a Teoria Ondulatória da luz. Para Huygens, a luz se propagava em forma de ondas através de um meio invisível chamado 'éter'."
  },
  newton: {
    titulo: "🌈 Isaac Newton (1704)",
    texto: "Defendeu a Teoria Corpuscular: a luz seria formada por pequenas partículas (corpúsculos). Ele também demonstrou a decomposição da luz branca com um prisma."
  },
  young: {
    titulo: "🔬 Thomas Young (1801)",
    texto: "Realizou o famoso experimento da dupla fenda, comprovando a interferência luminosa e fortalecendo a Teoria Ondulatória da luz."
  },
  maxwell: {
    titulo: "⚡ James Clerk Maxwell (1865)",
    texto: "Unificou a eletricidade, o magnetismo e a óptica, demonstrando matematicamente que a luz é uma onda eletromagnética."
  },
  einstein: {
    titulo: "⚛️ Albert Einstein (1905)",
    texto: "Explicou o Efeito Fotoelétrico introduzindo a ideia de quanta de luz (fótons). Ele provou que a luz também se comporta como partícula, o que lhe rendeu o Prêmio Nobel."
  },
  debroglie: {
    titulo: "🔄 Louis de Broglie (1924)",
    texto: "Propôs a Dualidade Onda-Partícula: a luz (e a matéria) possui comportamento duplo, agindo ora como onda, ora como partícula, dependendo de como é observada."
  }
};

// Banco de dados para o Contexto Social
const contextos = {
  residencial: {
    titulo: "🏠 Contexto Residencial",
    texto: "<p>Aplicações práticas da óptica no dia a dia em casa:</p><ul><li><strong>Lâmpadas LED:</strong> Eficiência energética baseada em semicondutores e física quântica.</li><li><strong>Espelhos Planos e Esféricos:</strong> Sensação de amplitude e aplicação em maquiagem/barbear.</li><li><strong>Lentes Ortodônticas/Óculos:</strong> Correção de miopia, hipermetropia e astigmatismo.</li></ul>"
  },
  comercial: {
    titulo: "🏢 Contexto Comercial",
    texto: "<p>Uso da óptica no comércio e escritórios:</p><ul><li><strong>Leitores de Código de Barras:</strong> Utilizam lasers para leitura rápida de dados.</li><li><strong>Fibras Ópticas:</strong> Transmissão ultra-rápida de dados de internet por reflexão interna total.</li><li><strong>Telas OLED/LCD:</strong> Displays interativos em monitores e caixas eletrônicos.</li></ul>"
  },
  escolar: {
    titulo: "🏫 Contexto Escolar & Acadêmico",
    texto: "<p>Tecnologias ópticas no ambiente educacional:</p><ul><li><strong>Projetores multimídia:</strong> Uso de prismas e lentes para amplificação de imagens.</li><li><strong>Microscópios Ópticos:</strong> Estudo de células e micro-organismos em laboratórios didáticos.</li><li><strong>Lupas e Lentes de Aumento:</strong> Ferramentas básicas para observação científica detalhada.</li></ul>"
  },
  industrial: {
    titulo: "🏭 Contexto Industrial",
    texto: "<p>Tecnologia de ponta baseada em óptica na indústria:</p><ul><li><strong>Corte e Solda a Laser:</strong> Alta precisão no manuseio de metais e materiais rígidos.</li><li><strong>Sensores Ópticos de Presença:</strong> Automação e segurança em linhas de produção.</li><li><strong>Espectrometria:</strong> Análise de composição química de materiais através do espectro de luz.</li></ul>"
  }
};

// --- NOVO BANCO DE DADOS: ANATOMIA E FÍSICA DA VISÃO (Pesquisa: Produto Final) ---
const anatomiaVisao = {
  olho: {
    titulo: "👁️ Anatomia do Olho Humano",
    texto: "<p>O olho é formado por três camadas:</p><ul><li><strong>Túnica Fibrosa:</strong> Córnea (foca a luz) e Esclera (proteção).</li><li><strong>Túnica Vascular:</strong> Íris (controla luz), Pupila, Cristalino (lente ajustável) e Corpo Ciliar.</li><li><strong>Camada Interna:</strong> Retina (transdução de luz em impulsos elétricos) e Nervo Óptico.</li></ul>"
  },
  imagem: {
    titulo: "📸 Formação da Imagem",
    texto: "A luz atravessa a córnea e o cristalino (lentes convergentes), projetando uma imagem real, menor e invertida na retina. Cones e bastonetes convertem esses estímulos em sinais elétricos enviados ao cérebro pelo nervo óptico."
  },
  espectro: {
    titulo: "🌈 Espectro Eletromagnético & Luz Visível",
    texto: "A luz visível situa-se entre 400 nm (violeta) e 700 nm (vermelho). Trata-se da única faixa do espectro que o olho humano consegue detectar e interpretar como cores."
  },
  fenomenos: {
    titulo: "🔍 Reflexão e Refração",
    texto: "<p><strong>Reflexão:</strong> A luz retorna ao meio de origem (especular em espelhos ou difusa).</p><p><strong>Refração:</strong> Mudança de velocidade da luz ao mudar de meio (ex: ar para água/vidro), essencial para o funcionamento de lentes de óculos e lupas.</p>"
  }
};

// --- NOVO BANCO DE DADOS: DEFICIÊNCIAS VISUAIS E ÓCULOS ---
const deficienciasEGaleria = {
  cegueira: {
    titulo: "🚫 Cegueira e Baixa Visão",
    texto: "Perda total ou severa da visão decorrente do bloqueio da passagem da luz (opacidade da córnea/catarata) ou falha na conversão e transmissão dos sinais elétricos ao cérebro (glaucoma e retina)."
  },
  patologias: {
    titulo: "🩺 Catarata, Glaucoma e Maculopatia",
    texto: "<ul><li><strong>Catarata:</strong> Opacificação do cristalino que espalha caoticamente a luz.</li><li><strong>Glaucoma:</strong> Pressão intraocular alta que comprime as fibras do nervo óptico (visão em túnel).</li><li><strong>Degeneração Macular:</strong> Lesão no centro da retina que compromete o foco e os detalhes visuais.</li></ul>"
  },
  daltonismo: {
    titulo: "🎨 Daltonismo",
    texto: "Dificuldade em distinguir frequências de luz específicas (principalmente verde e vermelho) devido à ausência ou disfunção dos cones da retina."
  },
  oculos: {
    titulo: "👓 Como Funcionam os Óculos",
    texto: "<ul><li><strong>Lentes Convergentes:</strong> Usadas para hipermetropia; adiantam o ponto focal para que a imagem se forme exatamente na retina.</li><li><strong>Lentes Divergentes:</strong> Usadas para miopia; afastam a trajetória dos raios luminosos para empurrar o foco de volta para a retina.</li></ul>"
  }
};

// --- NOVO BANCO DE DADOS: TECNOLOGIAS ASSISTIVAS E IA ---
const tecnologiasAssistivasIA = {
  ia: {
    titulo: "🤖 Inteligência Artificial na Visão Computacional",
    texto: "Sistemas de IA usam câmeras para capturar o ambiente, processar padrões de luz/cores e fornecer respostas em áudio: leitura de textos (OCR), reconhecimento de objetos, identificação de cédulas e reconhecimento facial."
  },
  assistivas: {
    titulo: "🦯 Recursos Tecnológicos Assistivos",
    texto: "<ul><li><strong>Leitores de Tela:</strong> NVDA, JAWS, VoiceOver e TalkBack traduzem telas para áudio ou Braille.</li><li><strong>Linhas e Impressoras Braille:</strong> Dispositivos eletromecânicos com pinos táticas dinâmicos.</li><li><strong>Lupas Eletrônicas & Óculos Inteligentes:</strong> Equipamentos como OrCam MyEye com microcâmera e IA embarcada.</li></ul>"
  },
  desafios: {
    titulo: "💡 Curiosidades & Desafios Educacionais",
    texto: "<p><strong>Cães-guia:</strong> Treinados em desobediência inteligente para evitar acidentes.</p><p><strong>Semáforos Sonoros:</strong> Usam bips em frequências variáveis e setas táticas para orientar travessias puramente pelo som.</p>"
  }
};

// --- FUNÇÕES INTERATIVAS ---

function alternarArtigo() {
  const conteudo = document.getElementById('mais-conteudo-artigo');
  const botao = document.getElementById('btn-ler-mais');

  if (conteudo.style.display === 'block') {
    conteudo.style.display = 'none';
    botao.textContent = '📖 Ler artigo completo';
  } else {
    conteudo.style.display = 'block';
    botao.textContent = '📖 Ocultar artigo';
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

// Novas funções para carregar os conteúdos da pesquisa
function mostrarAnatomia(chave) {
  const titulo = document.getElementById('titulo-anatomia');
  const conteudo = document.getElementById('conteudo-anatomia');

  if (anatomiaVisao[chave]) {
    titulo.textContent = anatomiaVisao[chave].titulo;
    conteudo.innerHTML = anatomiaVisao[chave].texto.includes('<p>') ? anatomiaVisao[chave].texto : `<p>${anatomiaVisao[chave].texto}</p>`;
  }
}

function mostrarDeficiencia(chave) {
  const titulo = document.getElementById('titulo-deficiencia');
  const conteudo = document.getElementById('conteudo-deficiencia');

  if (deficienciasEGaleria[chave]) {
    titulo.textContent = deficienciasEGaleria[chave].titulo;
    conteudo.innerHTML = deficienciasEGaleria[chave].texto.includes('<p>') || deficienciasEGaleria[chave].texto.includes('<ul>') ? deficienciasEGaleria[chave].texto : `<p>${deficienciasEGaleria[chave].texto}</p>`;
  }
}

function mostrarAssistiva(chave) {
  const titulo = document.getElementById('titulo-assistiva');
  const conteudo = document.getElementById('conteudo-assistiva');

  if (tecnologiasAssistivasIA[chave]) {
    titulo.textContent = tecnologiasAssistivasIA[chave].titulo;
    conteudo.innerHTML = tecnologiasAssistivasIA[chave].texto.includes('<p>') || tecnologiasAssistivasIA[chave].texto.includes('<ul>') ? tecnologiasAssistivasIA[chave].texto : `<p>${tecnologiasAssistivasIA[chave].texto}</p>`;
  }
}