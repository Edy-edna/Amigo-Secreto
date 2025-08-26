// Array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nome = document.getElementById("amigo").value.trim();

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    // Atualiza o array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Exibe a lista atualizada no console (opcional)
    console.log("Amigos cadastrados:", amigos);
}
// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    // Obter o elemento da lista no HTML
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li>
        let li = document.createElement("li");

        // Definir o texto do elemento como o nome do amigo
        li.textContent = amigos[i];

        // Adicionar o <li> à lista
        lista.appendChild(li);
    }
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione pelo menos um amigo.");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado no HTML
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}