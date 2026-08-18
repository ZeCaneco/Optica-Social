// Dados da Evolução Histórica
const dadosHistoria = {
    antiguidade: {
        titulo: "Grécia Antiga",
        texto: "Pensadores como Euclides e Ptolomeu acreditavam que os olhos emitiam raios de luz que 'tocavam' os objetos para podermos enxergar."
    },
    huygens: {
        titulo: "Christiaan Huygens (1678)",
        texto: "Propos a Teoria Ondulatória da Luz, afirmando que a luz se propaga como ondas através de um meio chamado éter."
    },
    newton: {
        titulo: "Isaac Newton (1704)",
        texto: "Defendeu a Teoria Corpuscular, propondo que a luz é formada por um feixe de pequenas partículas e demonstrou a decomposição da luz branca com um prisma."
    },
    young: {
        titulo: "Thomas Young (1801)",
        texto: "Com o experimento da fenda dupla, comprovou a interferência luminosa, fortalecendo a Teoria Ondulatória."
    },
    maxwell: {
        titulo: "James Clerk Maxwell (1865)",
        texto: "Demonstrou matematicamente que a luz é uma onda eletromagnética que se propaga no vácuo."
    },
    einstein: {
        titulo: "Albert Einstein (1905)",
        texto: "Explicou o efeito fotoelétrico sugerindo que a luz é composta por pacotes discretos de energia chamados fótons."
    },
    debroglie: {
        titulo: "Louis de Broglie (1924)",
        texto: "Estabeleceu a Dualidade Onda-Partícula: a luz comporta-se como onda e como partícula dependendo do fenômeno observado."
    }
};

// Dados da Anatomia do Olho
const dadosAnatomia = {
    cornea: {
        titulo: "Córnea",
        definicao: "Tecido transparente na parte anterior do olho, semelhante ao 'vidro de um relógio'.",
        funcao: "Funciona como a primeira e principal lente de refração, focando a luz e protegendo o interior do olho."
    },
    iris: {
        titulo: "Íris e Pupila",
        definicao: "A Íris é a membrana colorida e a Pupila é a abertura central transparente no meio dela.",
        funcao: "A íris regula a entrada de luz alterando o tamanho da pupila, funcionando como o diafragma de uma câmera."
    },
    cristalino: {
        titulo: "Cristalino",
        definicao: "Lente natural, transparente e flexível situada atrás da pupila.",
        funcao: "Ajusta o foco (acomodação) para permitir enxergar com clareza de perto e de longe."
    },
    retina: {
        titulo: "Retina",
        definicao: "Fina camada de tecido nervoso repleta de fotorreceptores no fundo do olho.",
        funcao: "Capta a luz focada e a converte em impulsos elétricos nervosos enviados ao cérebro."
    },
    macula: {
        titulo: "Mácula",
        definicao: "Pequena área amarelada no centro da retina.",
        funcao: "Responsável pela visão central de alta definição, leitura e percepção de detalhes finos."
    },
    esclera: {
        titulo: "Esclera",
        definicao: "Camada fibrosa e resistente que forma a 'parte branca' do olho.",
        funcao: "Protege o olho e mantém sua forma esférica."
    },
    coroide: {
        titulo: "Coróide",
        definicao: "Camada rica em vasos sanguíneos entre a esclera e a retina.",
        funcao: "Nutre a retina com oxigênio e absorve a luz para evitar reflexos internos."
    },
    nervo: {
        titulo: "Nervo Óptico",
        definicao: "Feixe de fibras nervosas que conecta o olho ao cérebro.",
        funcao: "Transporta os sinais elétricos até o cérebro para serem interpretados como imagens."
    },
    vitreo: {
        titulo: "Humor Vítreo",
        definicao: "Substância gelatinosa e transparente que preenche a cavidade do olho.",
        funcao: "Mantém a pressão interna do olho e a retina fixa no lugar."
    }
};

// Funções para exibir o conteúdo
function mostrarHistoria(chave) {
    const box = document.getElementById('visao-box');
    const item = dadosHistoria[chave];

    if (item) {
        box.innerHTML = `
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
        `;
    }
}

function mostrarAnatomia(parte) {
    const box = document.getElementById('info-anatomia');
    const item = dadosAnatomia[parte];

    if (item) {
        box.innerHTML = `
            <h3>${item.titulo}</h3>
            <p><strong>Definição:</strong> ${item.definicao}</p>
            <p><strong>Para que serve:</strong> ${item.funcao}</p>
        `;
    }
}

function alternarLeitura() {
    const conteudo = document.getElementById('conteudo-escondido');
    const btn = document.getElementById('btn-ler-mais');

    if (conteudo.style.display === 'block') {
        conteudo.style.display = 'none';
        btn.textContent = 'Ler mais';
    } else {
        conteudo.style.display = 'block';
        btn.textContent = 'Ler menos';
    }
}