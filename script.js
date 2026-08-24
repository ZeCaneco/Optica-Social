// 1. TEORIAS HISTÓRICAS
const teorias = {
  antiguidade: {
    titulo: "Antiguidade (Grécia Antiga)",
    texto: "Filósofos gregos acreditavam que a luz era formada por partículas que se propagavam em linha reta, ou por feixes emitidos diretamente pelos olhos."
  },
  huygens: {
    titulo: "Christiaan Huygens (1678)",
    texto: "Propôs a Teoria Ondulatória da luz. Explicou a reflexão e refração considerando a luz como uma onda que altera de velocidade em meios diferentes."
  },
  newton: {
    titulo: "Isaac Newton (1704)",
    texto: "Defendeu a Teoria Corpuscular (luz formada por partículas) e decompos a luz branca com um prisma demonstrando suas cores componentes."
  },
  young: {
    titulo: "Thomas Young (1801)",
    texto: "Demonstrou os fenômenos de interferência e difração no experimento da dupla fenda, comprovando o comportamento ondulatório da luz."
  },
  maxwell: {
    titulo: "James Clerk Maxwell (1865)",
    texto: "Provou matematicamente que a luz é uma onda eletromagnética composta por campos elétricos e magnéticos oscilantes."
  },
  einstein: {
    titulo: "Albert Einstein (1905)",
    texto: "Explicou o Efeito Fotoelétrico através dos pacotes de energia da luz (fótons), confirmando o aspecto corpuscular da luz."
  },
  debroglie: {
    titulo: "Louis de Broglie (1924)",
    texto: "Formulou a Dualidade Onda-Partícula: a luz possui simultaneamente comportamento ondulatório e corpuscular."
  }
};

// 2. CONTEXTOS SOCIAIS
const contextos = {
  residencial: {
    titulo: "Contexto Residencial",
    texto: "<ul><li><strong>Óculos e Lentes:</strong> Corrigem o ponto focal na retina.</li><li><strong>Espelhos:</strong> Refletem a luz permitindo a formação de imagens ampliadas ou planas.</li><li><strong>Câmeras:</strong> Conjuntos de lentes que projetam a luz em sensores digitais.</li></ul>"
  },
  comercial: {
    titulo: "Contexto Comercial",
    texto: "<ul><li><strong>Leitores de Código de Barras:</strong> Emitem laser para leitura digital por reflexão de luz.</li><li><strong>Fibra Óptica:</strong> Transmissão de dados via reflexão interna total da luz em cabos de vidro.</li></ul>"
  },
  escolar: {
    titulo: "Contexto Escolar",
    texto: "<ul><li><strong>Microscópios:</strong> Lentes convergentes associadas para ampliação de objetos minúsculos.</li><li><strong>Projetores:</strong> Sistemas de lentes e prismas para projeção de imagens.</li></ul>"
  },
  industrial: {
    titulo: "Contexto Industrial",
    texto: "<ul><li><strong>Corte a Laser:</strong> Feixes de luz focalizada com alta energia para corte de precisão.</li><li><strong>Sensores Ópticos:</strong> Dispositivos de segurança ativados pela interrupção do feixe luminoso.</li></ul>"
  }
};

// 3. ANATOMIA E FÍSICA
const anatomiaVisao = {
  oque_e_luz: {
    titulo: "O que é Luz?",
    texto: "A luz é radiação eletromagnética visível ao olho humano. Ela atua como onda e partícula (fótons), propagando-se no vácuo e permitindo a transmissão da informação visual."
  },
  como_luz_entra: {
    titulo: "Como a Luz Entra no Olho",
    texto: "A luz passa pela córnea, atravessa a pupila (regulada pela íris), é focada pelo cristalino e atinge a retina no fundo do olho."
  },
  olho: {
    titulo: "Anatomia Ocular",
    texto: "Formado pela Córnea, Íris, Pupila, Cristalino, Retina e Nervo Óptico, atuando como um sistema óptico biológico complexo."
  },
  imagem: {
    titulo: "Formação da Imagem",
    texto: "As lentes dos olhos projetam uma imagem real, invertida e menor diretamente sobre os fotorreceptores da retina."
  },
  nervo: {
    titulo: "Nervo Óptico",
    texto: "Transporta os estímulos elétricos gerados na retina até o cérebro, onde a imagem é desinvertida e interpretada."
  },
  espectro: {
    titulo: "Espectro Visível",
    texto: "Faixa de luz detectável pelos olhos humanos (entre aproximadamente 400nm e 700nm de comprimento de onda)."
  },
  fenomenos: {
    titulo: "Reflexão e Refração",
    texto: "Reflexão é o retorno da luz ao atingir uma superfície. Refração é a mudança de velocidade e direção da luz ao trocar de meio."
  },
  cores: {
    titulo: "Formação das Cores",
    texto: "As cores são formadas pelas frequências de luz refletidas pelos objetos e captadas pelos cones da retina."
  }
};

// 4. DEFICIÊNCIAS VISUAIS
const deficienciasEGaleria = {
  miopia: {
    titulo: "Miopia",
    texto: "A imagem se forma antes da retina. Causa visão embaçada para objetos distantes. É corrigida com lentes divergentes."
  },
  hipermetropia: {
    titulo: "Hipermetropia",
    texto: "A imagem se forma atrás da retina. Causa dificuldade para enxergar de perto. É corrigida com lentes convergentes."
  },
  astigmatismo: {
    titulo: "Astigmatismo",
    texto: "A curvatura irregular da córnea gera múltiplos pontos focais. É corrigido com lentes cilíndricas."
  },
  cegueira: {
    titulo: "Cegueira e Baixa Visão",
    texto: "Perda total ou parcial da capacidade visual não corrigível por óculos comuns, exigindo recursos adaptativos."
  },
  patologias: {
    titulo: "Catarata e Glaucoma",
    texto: "A catarata opacifica o cristalino, enquanto o glaucoma danifica o nervo óptico pelo aumento da pressão ocular."
  },
  daltonismo: {
    titulo: "Daltonismo",
    texto: "Alteração na percepção das cores causada pela ausência ou disfunção de fotorreceptores específicos."
  },
  oculos: {
    titulo: "Lentes Corretivas",
    texto: "Lentes convergentes ajustam focos curtos; lentes divergentes estendem o foco para que ele atinja com precisão a retina."
  }
};

// 5. TECNOLOGIAS ASSISTIVAS E IA
const tecnologiasAssistivasIA = {
  oculos_inteligentes: {
    titulo: "Óculos Inteligentes",
    texto: "Óculos equipados com câmeras e IA que leem textos e identificam objetos/pessoas, informando o usuário via áudio."
  },
  apps_acessibilidade: {
    titulo: "Aplicativos de Acessibilidade",
    texto: "Ferramentas como Seeing AI, Be My Eyes e Lookout que auxiliam pessoas cegas no reconhecimento de textos e rotas."
  },
  ia: {
    titulo: "Visão Computacional",
    texto: "Algoritmos digitais que interpretam dados de imagens captadas por câmeras para traduzi-los em voz ou ações."
  },
  recursos_ia: {
    titulo: "Recursos de IA (OCR)",
    texto: "Sistemas capazes de reconhecer letras e caracteres impressos em fotos e transformá-los em texto falado."
  },
  assistivas: {
    titulo: "Leitores de Tela e Linhas Braille",
    texto: "Programas e dispositivos físicos que transmitem em áudio ou toque tátil as informações das telas digitais."
  },
  curiosidades: {
    titulo: "Gestos no Celular",
    texto: "Atalhos táteis e síntese de áudio adaptada permitem que pessoas cegas operem smartphones com total autonomia."
  }
};

// 6. SAÚDE VISUAL
const saudeVisual = {
  exames: {
    titulo: "Exames Regulares",
    texto: "Consultas periódicas ao oftalmologista ajudam a identificar patologias silenciosas como glaucoma precocemente."
  },
  protecao: {
    titulo: "Proteção contra Raios UV",
    texto: "O uso de óculos com proteção UV adequada evita queimaduras na córnea e previne a formação precoce de catarata."
  },
  habitos: {
    titulo: "Hábitos Saudáveis",
    texto: "Alimentação rica em vitaminas, boa iluminação de leitura e não coçar os olhos preservam a integridade ocular."
  }
};

// 7. IMPACTO SOCIOECONÔMICO
const socioeconomico = {
  rendimento: {
    titulo: "Rendimento Escolar",
    texto: "Problemas de visão não diagnosticados são uma das maiores causas de déficit de atenção e evasão escolar infantil."
  },
  trabalho: {
    titulo: "Mercado de Trabalho",
    texto: "A correção visual adequada garante a inclusão e o pleno desempenho profissional de trabalhadores."
  },
  desigualdade: {
    titulo: "Redução de Desigualdades",
    texto: "Prover acesso gratuito ou de baixo custo a óculos diminui disparidades sociais e gera oportunidade de renda."
  }
};

// 8. ERGONOMIA
const ergonomiaVisual = {
  telas: {
    titulo: "Uso de Telas",
    texto: "A exposição contínua a telas reduz o número de piscadas, provocando ressecamento e fadiga nos olhos."
  },
  iluminacao: {
    titulo: "Iluminação Adequada",
    texto: "Evite ler ou trabalhar em ambientes escuros com telas brilhantes. A luz ambiente deve ser homogênea."
  },
  pausas: {
    titulo: "Regra das Pausas (20-20-20)",
    texto: "A cada 20 minutos focados em telas, olhe para algo a 6 metros (20 pés) de distância por 20 segundos."
  }
};

// 9. INCLUSÃO
const inclusaoVisual = {
  escolas: {
    titulo: "Adaptação Escolar",
    texto: "Uso de quadros acessíveis, textos impressos em letras ampliadas e posicionamento estratégico do aluno na sala."
  },
  empresas: {
    titulo: "Acessibilidade nas Empresas",
    texto: "Treinamentos, instalação de softwares leitores de tela e piso tátil promovem a autonomia no ambiente corporativo."
  },
  materiais: {
    titulo: "Materiais Adaptados",
    texto: "Disponibilização de conteúdos pedagógicos em Braille, áudio-livros e gráficos em alto-relevo."
  }
};

// 10. AVANÇOS BIOMÉDICOS
const biomedica = {
  retina_artificial: {
    titulo: "Retina Artificial",
    texto: "Microchips implantados no olho que captam feixes de luz e enviam estímulos elétricos ao nervo óptico."
  },
  chips: {
    titulo: "Implantes Biônicos",
    texto: "Dispositivos conectados diretamente ao córtex visual para restaurar formas básicas de percepção luminosa."
  },
  terapia_genica: {
    titulo: "Terapias Genéticas",
    texto: "Tratamentos inovadores focados na recuperação e prevenção da degeneração das células da retina."
  }
};

// 11. FUTURO DA ÓPTICA
const futuroOptica = {
  exames_portateis: {
    titulo: "Exames Portáteis",
    texto: "Equipamentos acoplados a celulares que realizam exames de refração completos em comunidades distantes."
  },
  impressao_3d: {
    titulo: "Impressão 3D de Lentes",
    texto: "Fabricação personalizada de lentes sob medida em questão de minutos com custo significativamente reduzido."
  },
  baixo_custo: {
    titulo: "Tecnologias Acessíveis",
    texto: "Desenvolvimento de materiais mais resistentes e baratos para universalizar o acesso a óculos de grau."
  }
};

// 12. POLÍTICAS PÚBLICAS
const politicasPublicas = {
  triagem: {
    titulo: "Triagem nas Escolas",
    texto: "Testes de acuidade visual aplicados diretamente nas redes públicas de ensino para diagnóstico precoce."
  },
  doacao: {
    titulo: "Programas de Doação",
    texto: "Parcerias entre ONGs e o setor privado para a entrega de armações e lentes gratuitas para famílias vulneráveis."
  },
  sus: {
    titulo: "Atendimento no SUS",
    texto: "Garantia de consultas com oftalmologistas e fornecimento de óculos por meio do sistema público de saúde."
  }
};

// --- FUNÇÕES DE EXIBIÇÃO ---

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
  if (teorias[chave]) {
    document.getElementById('titulo-teoria').textContent = teorias[chave].titulo;
    document.getElementById('conteudo-teoria').innerHTML = `<p>${teorias[chave].texto}</p>`;
  }
}

function mudarContexto(chave) {
  if (contextos[chave]) {
    document.getElementById('titulo-contexto').textContent = contextos[chave].titulo;
    document.getElementById('conteudo-contexto').innerHTML = contextos[chave].texto;
  }
}

function mostrarAnatomia(chave) {
  if (anatomiaVisao[chave]) {
    document.getElementById('titulo-anatomia').textContent = anatomiaVisao[chave].titulo;
    document.getElementById('conteudo-anatomia').innerHTML = `<p>${anatomiaVisao[chave].texto}</p>`;
  }
}

function mostrarDeficiencia(chave) {
  if (deficienciasEGaleria[chave]) {
    document.getElementById('titulo-deficiencia').textContent = deficienciasEGaleria[chave].titulo;
    document.getElementById('conteudo-deficiencia').innerHTML = `<p>${deficienciasEGaleria[chave].texto}</p>`;
  }
}

function mostrarAssistiva(chave) {
  if (tecnologiasAssistivasIA[chave]) {
    document.getElementById('titulo-assistiva').textContent = tecnologiasAssistivasIA[chave].titulo;
    document.getElementById('conteudo-assistiva').innerHTML = `<p>${tecnologiasAssistivasIA[chave].texto}</p>`;
  }
}

function mostrarSaude(chave) {
  if (saudeVisual[chave]) {
    document.getElementById('titulo-saude').textContent = saudeVisual[chave].titulo;
    document.getElementById('conteudo-saude').innerHTML = `<p>${saudeVisual[chave].texto}</p>`;
  }
}

function mostrarSocio(chave) {
  if (socioeconomico[chave]) {
    document.getElementById('titulo-socio').textContent = socioeconomico[chave].titulo;
    document.getElementById('conteudo-socio').innerHTML = `<p>${socioeconomico[chave].texto}</p>`;
  }
}

function mostrarErgonomia(chave) {
  if (ergonomiaVisual[chave]) {
    document.getElementById('titulo-ergonomia').textContent = ergonomiaVisual[chave].titulo;
    document.getElementById('conteudo-ergonomia').innerHTML = `<p>${ergonomiaVisual[chave].texto}</p>`;
  }
}

function mostrarInclusao(chave) {
  if (inclusaoVisual[chave]) {
    document.getElementById('titulo-inclusao').textContent = inclusaoVisual[chave].titulo;
    document.getElementById('conteudo-inclusao').innerHTML = `<p>${inclusaoVisual[chave].texto}</p>`;
  }
}

function mostrarBiomedica(chave) {
  if (biomedica[chave]) {
    document.getElementById('titulo-biomedica').textContent = biomedica[chave].titulo;
    document.getElementById('conteudo-biomedica').innerHTML = `<p>${biomedica[chave].texto}</p>`;
  }
}

function mostrarFuturo(chave) {
  if (futuroOptica[chave]) {
    document.getElementById('titulo-futuro').textContent = futuroOptica[chave].titulo;
    document.getElementById('conteudo-futuro').innerHTML = `<p>${futuroOptica[chave].texto}</p>`;
  }
}

function mostrarPoliticas(chave) {
  if (politicasPublicas[chave]) {
    document.getElementById('titulo-politicas').textContent = politicasPublicas[chave].titulo;
    document.getElementById('conteudo-politicas').innerHTML = `<p>${politicasPublicas[chave].texto}</p>`;
  }
}