// Função para mudar o conteúdo e visual baseado na "lente" escolhida
function mudarPerspectiva(lente) {
    const caixaVisao = document.getElementById('caixa-visao');
    const textoVisao = document.getElementById('texto-visao');

    if (lente === 'individual') {
        textoVisao.innerHTML = "<strong>Lente Individual:</strong> Foca na responsabilidade e nas escolhas do indivíduo de forma isolada.";
        caixaVisao.style.backgroundColor = "#e3f2fd";
        caixaVisao.style.borderColor = "#2196f3";
    } 
    else if (lente === 'coletiva') {
        textoVisao.innerHTML = "<strong>Lente Coletiva:</strong> Analisa as redes de apoio, cultura comunitária e o ambiente social imediato.";
        caixaVisao.style.backgroundColor = "#e8f5e9";
        caixaVisao.style.borderColor = "#4caf50";
    } 
    else if (lente === 'historica') {
        textoVisao.innerHTML = "<strong>Lente Histórica:</strong> Observa as estruturas de longo prazo, políticas públicas e antecedentes que moldaram a situação atual.";
        caixaVisao.style.backgroundColor = "#fff3e0";
        caixaVisao.style.borderColor = "#ff9800";
    }
}