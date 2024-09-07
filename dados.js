// Função para salvar dados no sessionStorage
function salvarDados(humor, data) {
  // Salva os dados no sessionStorage
  sessionStorage.setItem('ultimoHumor', humor);
  sessionStorage.setItem('ultimaData', data);
}

// Função para pesquisar dados por data
function pesquisarPorData(data) {
  // Recupera os dados armazenados no sessionStorage
  const ultimaData = sessionStorage.getItem('ultimaData');
  const ultimoHumor = sessionStorage.getItem('ultimoHumor');
  
  // Verifica se a data fornecida corresponde à data salva
  if (data === ultimaData) {
      return {
          humor: ultimoHumor,
          data: ultimaData
      };
  } else {
      return null; // Nenhum dado encontrado para a data fornecida
  }
}