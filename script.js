// 1. DADOS DA HISTÓRIA DA LUZ (NOVO)
const dadosTeoria = {
    antiguidade: {
        titulo: "Antiguidade (Grécia Antiga)",
        texto: "Alguns filósofos gregos acreditavam que a luz era formada por pequenas partículas que se propagavam em linha reta e com alta velocidade.",
        corFundo: "#f7fafc",
        corBorda: "#a0aec0"
    },
    huygens: {
        titulo: "Christian Huygens (Teoria Ondulatória)",
        texto: "Explicou a reflexão e refração tratando a luz como onda. <strong>Princípio chave:</strong> Cada ponto de uma frente de onda gera novas ondas menores.<br><br>• <em>Reflexão:</em> As ondas batem e voltam juntas.<br>• <em>Refração:</em> A luz muda de velocidade ao trocar de meio (ex: ar para água), entortando a frente de onda.",
        corFundo: "#ebf8ff",
        corBorda: "#3182ce"
    },
    newton: {
        titulo: "Isaac Newton (Decomposição da Luz)",
        texto: "Demonstrou que a luz branca é formada por várias cores. Usando um prisma, mostrou que ela pode ser decomposta nas cores do arco-íris e reunida novamente, servindo de base para telescópios e instrumentos ópticos.",
        corFundo: "#faf5ff",
        corBorda: "#805ad5"
    },
    young: {
        titulo: "Thomas Young (Experimento da Dupla Fenda - 1801)",
        texto: "Demonstrou fenômenos de interferência e difração, fundamentando a natureza ondulatória da luz e enfraquecendo o modelo corpuscular dominante até então.",
        corFundo: "#e6fffa",
        corBorda: "#319795"
    },
    maxwell: {
        titulo: "James Clerk Maxwell (Eletromagnetismo)",
        texto: "Demonstrou que a luz é uma onda eletromagnética, resultado da oscilação de campos elétricos e magnéticos que se propagam pelo espaço.",
        corFundo: "#fff5f5",
        corBorda: "#e53e3e"
    },
    einstein: {
        titulo: "Albert Einstein (Os Fótons e o Efeito Fotoelétrico)",
        texto: "Percebeu que a luz também se comporta como partícula (fótons). Cada fóton carrega um pacote fechado de energia proporcional à cor da luz, explicando como a luz consegue arrancar elétrons de um metal.",
        corFundo: "#feefc3",
        corBorda: "#d69e2e"
    },
    debroglie: {
        titulo: "Louis de Broglie (Dualidade Onda-Partícula)",
        texto: "Elucidou a antiga questão unificando os modelos: a luz possui comportamento dual, comportando-se ora como onda, ora como partícula (fóton).",
        corFundo: "#fefcbf",
        corBorda: "#b7791f"
    }
};

// Função para mudar a teoria na tela
function mostrarTeoria(chave) {
    const caixa = document.getElementById('caixa-teoria');
    const titulo = document.getElementById('titulo-teoria');
    const conteudo = document.getElementById('conteudo-teoria');

    const dados = dadosTeoria[chave];

    if (dados && caixa) {
        titulo.innerText = dados.titulo;
        conteudo.innerHTML = `<p>${dados.texto}</p>`;
        caixa.style.backgroundColor = dados.corFundo;
        caixa.style.borderColor = dados.corBorda;
    }
}

// Função para expandir/recolher o Artigo
function alternarArtigo() {
    const maisConteudo = document.getElementById('mais-conteudo-artigo');
    const btn = document.getElementById('btn-ler-mais');

    if (maisConteudo.style.display === "block") {
        maisConteudo.style.display = "none";
        btn.innerText = "📖 Ler artigo completo";
    } else {
        maisConteudo.style.display = "block";
        btn.innerText = "📕 Recolher artigo";
    }
}

// 2. DADOS DOS CONTEXTOS SOCIAIS (PESQUISA ANTERIOR)
const dadosPesquisa = {
    residencial: {
        titulo: "Contexto Residencial",
        equipamentos: