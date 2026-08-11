// Banco de dados para a linha do tempo (História da Luz)
const teorias = {
  antiguidade: {
    titulo: " Antiguidade (Grécia Antiga)",
    texto: "Pensadores como Euclides e Ptolomeu acreditavam na teoria da emissão: os olhos emitiam feixes de luz que 'tocavam' os objetos para que pudéssemos enxergar."
  },
  huygens: {
    titulo: " Christiaan Huygens (1678)",
    texto: "Propôs a Teoria Ondulatória da luz. Para Huygens, a luz se propagava em forma de ondas através de um meio invisível chamado 'éter'."
  },
  newton: {
    titulo: " Isaac Newton (1704)",
    texto: "Defendeu a Teoria Corpuscular: a luz seria formada por pequenas partículas (corpúsculos). Ele também demonstrou a decomposição da luz branca com um prisma."
  },
  young: {
    titulo: " Thomas Young (1801)",
    texto: "Realizou o famoso experimento da dupla fenda, comprovando a interferência luminosa e fortalecendo a Teoria Ondulatória da luz."
  },
  maxwell: {
    titulo: " James Clerk Maxwell (1865)",
    texto: "Unificou a eletricidade, o magnetismo e a óptica, demonstrando matematicamente que a luz é uma onda eletromagnética."
  },
  einstein: {
    titulo: " Albert Einstein (1905)",
    texto: "Explicou o Efeito Fotoelétrico introduzindo a ideia de quanta de luz (fótons). Ele provou que a luz também se comporta como partícula, o que lhe rendeu o Prêmio Nobel."
  },
  debroglie: {
    titulo: " Louis de Broglie (1924)",
    texto: "Propôs a Dualidade Onda-Partícula: a luz (e a matéria) possui comportamento duplo, agindo ora como onda, ora como partícula, dependendo de como é observada."
  }
};

// Banco de dados para o Contexto Social
const contextos = {
  residencial: {
    titulo: " Contexto Residencial",
    texto: "<p>Aplicações práticas da óptica no dia a dia em casa:</p><ul><li><strong>Lâmpadas LED:</strong> Eficiência energética baseada em semicondutores e física quântica.</li><li><strong>Espelhos Planos e Esféricos:</strong> Sensação de amplitude e aplicação em maquiagem/barbear.</li><li><strong>Lentes Ortodônticas/Óculos:</strong> Correção de miopia, hipermetropia e astigmatismo.</li></ul>"
  },
  comercial: {
    titulo: " Contexto Comercial",
    texto: "<p>Uso da óptica no comércio e escritórios:</p><ul><li><strong>Leitores de Código de Barras:</strong> Utilizam lasers para leitura rápida de dados.</li><li><strong>Fibras Ópticas:</strong> Transmissão ultra-rápida de dados de internet por reflexão interna total.</li><li><strong>Telas OLED/LCD:</strong> Displays interativos em monitores e caixas eletrônicos.</li></ul>"
  },
  escolar: {
    titulo: " Contexto Escolar & Acadêmico",
    texto: "<p>Tecnologias ópticas no ambiente educacional:</p><ul><li><strong>Projetores multimídia:</strong> Uso de prismas e lentes para amplificação de imagens.</li><li><strong>Microscópios Ópticos:</strong> Estudo de células e micro-organismos em laboratórios didáticos.</li><li><strong>Lupas e Lentes de Aumento:</strong> Ferramentas básicas para observação científica detalhada.</li></ul>"
  },
  industrial: {
    titulo: " Contexto Industrial",
    texto: "<p>Tecnologia de ponta baseada em óptica na indústria:</p><ul><li><strong>Corte e Solda a Laser:</strong> Alta precisão no manuseio de metais e materiais rígidos.</li><li><strong>Sensores Ópticos de Presença:</strong> Automação e segurança em linhas de produção.</li><li><strong>Espectrometria:</strong> Análise de composição química de materiais através do espectro de luz.</li></ul>"
  }
};

// Banco de dados: Anatomia e Física da Visão
const anatomiaVisao = {
  olho: {
    titulo: " Anatomia do Olho Humano",
    texto: "<p>O olho é formado por três camadas principais:</p><ul><li><strong>Túnica Fibrosa:</strong> Córnea (foca a luz) e Esclera (proteção externa).</li><li><strong>Túnica Vascular:</strong> Íris (controla a entrada de luz), Pupila, Cristalino (lente ajustável) e Corpo Ciliar.</li><li><strong>Camada Interna:</strong> Retina (transdução da luz em impulsos elétricos) e Nervo Óptico.</li></ul>"
  },
  imagem: {
    titulo: " Formação da Imagem",
    texto: "<p>A luz atravessa a córnea e o cristalino (que atuam como lentes convergentes), projetando uma imagem real, menor e invertida na retina. Cones e bastonetes convertem esses estímulos em sinais elétricos que são transmitidos ao cérebro pelo nervo óptico, onde a imagem é interpretada de forma correta.</p>"
  },
  espectro: {
    titulo: " Espectro Eletromagnético & Luz Visível",
    texto: "<p>A luz visível situa-se entre aproximadamente 400 nm (violeta) e 700 nm (vermelho). Trata-se da única faixa do espectro eletromagnético que o olho humano é capaz de detectar e interpretar como cores através dos fotorreceptores celulares.</p>"
  },
  fenomenos: {
    titulo: " Reflexão e Refração",
    texto: "<p><strong>Reflexão:</strong> Ocorre quando a luz atinge uma superfície e retorna ao meio de origem (pode ser especular em espelhos ou difusa em superfícies irregulares).</p><p><strong>Refração:</strong> Mudança na velocidade e direção da luz ao mudar de meio de propagação (ex: do ar para a água ou vidro). É o princípio fundamental para o funcionamento de lentes de óculos, câmeras e microscópios.</p>"
  }
};

// Banco de dados: Deficiência Visual e Correção
const deficienciasEGaleria = {
  cegueira: {
    titulo: " Cegueira e Baixa Visão",
    texto: "<p>A cegueira ou baixa visão decorrem de falhas na passagem da luz (como a opacidade da córnea ou catarata) ou na incapacidade de converter e transmitir sinais elétricos ao cérebro (como em danos na retina ou no nervo óptico provocados pelo glaucoma).</p>"
  },
  patologias: {
    titulo: " Catarata, Glaucoma e Maculopatia",
    texto: "<ul><li><strong>Catarata:</strong> Opacificação do cristalino que espalha caoticamente os raios luminosos, embaçando a visão.</li><li><strong>Glaucoma:</strong> Aumento da pressão intraocular que comprime e danifica progressivamente as fibras do nervo óptico (perda da visão periférica).</li><li><strong>Degeneração Macular:</strong> Lesão no centro da retina (mácula) que compromete a visão central de detalhes finos.</li></ul>"
  },
  daltonismo: {
    titulo: " Daltonismo",
    texto: "<p>Condição genética caracterizada pela dificuldade em distinguir frequências específicas de luz (geralmente verde e vermelho). Isso ocorre devido à ausência ou disfunção parcial dos cones fotorreceptores na retina.</p>"
  },
  oculos: {
    titulo: " Como Funcionam os Óculos",
    texto: "<ul><li><strong>Lentes Convergentes (Convexas):</strong> Utilizadas para corrigir a hipermetropia e presbiopia, adiantando o ponto focal para que a imagem se forme exatamente sobre a retina.</li><li><strong>Lentes Divergentes (Côncavas):</strong> Utilizadas para corrigir a miopia, afastando os raios luminosos para adiar o foco e fazê-lo atingir a retina corretamente.</li></ul>"
  }
};

// Banco de dados: Tecnologias Assistivas e IA
const tecnologiasAssistivasIA = {
  ia: {
    titulo: " Inteligência Artificial na Visão Computacional",
    texto: "<p>Sistemas modernos de IA utilizam câmeras para capturar imagens em tempo real, processar padrões de cores e objetos, e narrar o ambiente em áudio. Isso possibilita a leitura instantânea de impressos (OCR), identificação de cédulas de dinheiro e reconhecimento de rostos e obstáculos.</p>"
  },
  assistivas: {
    titulo: " Recursos Tecnológicos Assistivos",
    texto: "<ul><li><strong>Leitores de Tela:</strong> Softwares como NVDA, JAWS, VoiceOver e TalkBack que transformam elementos visuais da tela em fala sintetizada ou braille.</li><li><strong>Linhas Braille Dinâmicas:</strong> Dispositivos eletromecânicos que sobem e descem pinos físicos para permitir a leitura tátil em tempo real.</li><li><strong>Óculos Inteligentes:</strong> Dispositivos como o OrCam MyEye, equipados com microcâmeras e IA embarcada para leitura e auxílio autônomo.</li></ul>"
  },
  desafios: {
    titulo: " Curiosidades & Desafios Educacionais",
    texto: "<p><strong>Cães-guia:</strong> Passam por treinamento intensivo e aprendem a 'desobediência inteligente', recusando ordens do tutor se houver perigo iminente (como um degrau ou buraco).</p><p><strong>Semáforos Sonoros:</strong> Emitem sinais sonoros com frequências e ritmos variados para orientar a travessia segura baseada na percepção auditiva.</p>"
  }
};

// --- FUNÇÕES INTERATIVAS ---

function alternarArtigo() {
  const conteudo = document.getElementById('mais-conteudo-artigo');
  const botao = document.getElementById('btn-ler-mais');

  if (conteudo.style.display === 'block') {
    conteudo.style.display = 'none';
    botao.textContent = ' Ler artigo completo';
  } else {
    conteudo.style.display = 'block';
    botao.textContent = ' Ocultar artigo';
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