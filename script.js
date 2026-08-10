// 1. Seleciona o container pai onde os novos itens/documentos são adicionados
const container = document.querySelector('#container-documentos');

// 2. Adiciona o ouvinte de clique no CONTAINER PAI (e não nos botões individuais)
container.addEventListener('click', function (event) {
  
  // Verifica se o elemento clicado (ou o ancestral dele) tem a classe do botão/item interativo
  const elementoClicado = event.target.closest('.item-interativo');

  // Se o clique foi realmente no elemento correto:
  if (elementoClicado && container.contains(elementoClicado)) {
    
    // --- SUA LÓGICA DE INTERAÇÃO AQUI ---
    console.log('Item clicado com sucesso!', elementoClicado);
    
    // Exemplo: Alternar uma classe visual ou abrir algo
    elementoClicado.classList.toggle('ativo');
  }
});


// 3. Função para adicionar novos itens (Sua lógica existente para criar documentos)
function adicionarNovoDocumento(titulo) {
  const novoItem = document.createElement('div');
  
  // Certifique-se de dar a classe que o evento acima procura ('item-interativo')
  novoItem.className = 'item-interativo';
  novoItem.textContent = titulo;

  // Adiciona o novo item dentro do container
  container.appendChild(novoItem);
}