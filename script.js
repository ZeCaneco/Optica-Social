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

// --- FUNÇÕES INTERATIVAS ---

// 1. Alterna o artigo ("Ler mais" / "Ler menos")
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

// 2. Mostra a teoria do cientista selecionado
function mostrarTeoria(chave) {
  const titulo = document.getElementById('titulo-teoria');
  const conteudo = document.getElementById('conteudo-teoria');

  if (teorias[chave]) {
    titulo.textContent = teorias[chave].titulo;
    conteudo.innerHTML = `<p>${teorias[chave].texto}</p>`;
  }
}

// 3. Mostra o contexto social selecionado
function mudarContexto(chave) {
  const titulo = document.getElementById('titulo-contexto');
  const conteudo = document.getElementById('conteudo-contexto');

  if (contextos[chave]) {
    titulo.textContent = contextos[chave].titulo;
    conteudo.innerHTML = contextos[chave].texto;
  }
}