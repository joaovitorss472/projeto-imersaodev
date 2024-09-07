document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('moodForm');
    const resultsList = document.getElementById('resultsList');
    const searchInput = document.getElementById('searchInput');

    // Array para armazenar as entradas (para busca)
    const entries = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Captura os valores dos campos do formulário
        const date = document.getElementById('date').value;
        const moodSelect = document.getElementById('mood');
        const mood = moodSelect.value;
        const moodEmoji = moodSelect.options[moodSelect.selectedIndex].getAttribute('data-emoji');
        const note = document.getElementById('note').value;

        // Cria um item de lista para exibir os resultados
        const listItem = document.createElement('li');
        listItem.innerHTML = `Data: ${date}, Humor: ${moodEmoji} ${mood}, Observações: ${note}`;

        // Adiciona o item de lista à lista de resultados
        resultsList.appendChild(listItem);

        // Adiciona a nova entrada ao array
        entries.push({ date, mood, moodEmoji, note });

        // Limpa os campos do formulário após a submissão
        form.reset();
    });

    // Função para filtrar entradas
    function searchEntries() {
        const searchText = searchInput.value.toLowerCase();
        const filteredEntries = entries.filter(entry => 
            entry.date.includes(searchText) || 
            entry.mood.toLowerCase().includes(searchText) || 
            entry.note.toLowerCase().includes(searchText)
        );

        // Limpa a lista atual
        resultsList.innerHTML = '';

        // Exibe as entradas filtradas
        filteredEntries.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `Data: ${entry.date}, Humor: ${entry.moodEmoji} ${entry.mood}, Observações: ${entry.note}`;
            resultsList.appendChild(listItem);
        });
    }

    // Adiciona o evento de busca quando o usuário digitar
    searchInput.addEventListener('input', searchEntries);
});
