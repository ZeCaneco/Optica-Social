// Dados da pesquisa mapeados por contexto
const dadosPesquisa = {
    residencial: {
        titulo: "Contexto Residencial",
        equipamentos: ["Lâmpadas LED", "Espelhos", "Câmeras de Segurança", "Óculos de Grau", "Binóculos / Lunetas"],
        principios: "Iluminação eficiente, reflexão da luz para formação de imagens, refração em lentes corretivas e foco ampliado para visualizações à distância.",
        corFundo: "#ebf8ff",
        corBorda: "#3182ce"
    },
    comercial: {
        titulo: "Contexto Comercial",
        equipamentos: ["Leitores de Código de Barras", "Projetores de Vídeo", "Iluminação Decorativa", "Vitrines Espelhadas/Transparentes"],
        principios: "Uso de feixes laser refletidos para leitura de dados digitais, refração e projeção de luz sobre telas, e controle de reflexão/transmissão luminosa.",
        corFundo: "#feefc3",
        corBorda: "#d69e2e"
    },
    escolar: {
        titulo: "Contexto Escolar",
        equipamentos: ["Microscópios Ópticos", "Lupas", "Prismas de Difração", "Projetores Educacionais"],
        principios: "Refração em sistemas de lentes para ampliação extrema de estruturas biológicas e difração/dispersão da luz branca em espectros coloridos para demonstração científica.",
        corFundo: "#e6fffa",
        corBorda: "#319795"
    },
    industrial: {
        titulo: "Contexto Industrial",
        equipamentos: ["Lasers de Corte e Gravação", "Sensores Ópticos de Presença", "Espectrômetros", "Sistemas de Inspeção por Imagem"],
        principios: "Alta concentração de fótons para usinagem térmica, absorção e reflexão rápida para medição de materiais e automação via varredura óptica.",
        corFundo: "#fefcbf",
        corBorda: "#b7791f"
    }
};

function mudarContexto(contexto) {
    const caixaVisao = document.getElementById('caixa-visao');
    const titulo = document.getElementById('titulo-contexto');
    const conteudo = document.getElementById('conteudo-contexto');

    const dados = dadosPesquisa[contexto];

    if (dados) {
        titulo.innerText = dados.titulo;
        
        // Monta a lista de equipamentos em HTML
        let listaEquipamentos = dados.equipamentos.map(eq => `<li>${eq}</li>`).join('');

        conteudo.innerHTML = `
            <p><strong>Equipamentos Utilizados:</strong></p>
            <ul>${listaEquipamentos}</ul>
            <br>
            <p><strong>Princípios Ópticos:</strong> ${dados.principios}</p>
        `;

        // Aplica cores temáticas dinamicamente
        caixaVisao.style.backgroundColor = dados.corFundo;
        caixaVisao.style.borderColor = dados.corBorda;
    }
}