const livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: "1954",
        genero: "Fantasia Épica",
        paginas: 1202,
        capa: "img/LOTR_Part1.png",
        sinopse: "Uma jornada épica pela Terra-média para destruir o Um Anel.",
        audio: "audio/sinopse1.mp3"
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        ano: "1937",
        genero: "Fantasia Épica",
        paginas: 336,
        capa: "img/TheHobbit.png",
        sinopse: "A aventura de Bilbo Bolseiro em busca do tesouro guardado por Smaug.",
        audio: "audio/sinopse2.mp3"
    },
    {
        titulo: "O Silmarillion",
        autor: "J.R.R. Tolkien",
        ano: "1977",
        genero: "Mitologia/Fantasia",
        paginas: 480,
        capa: "img/OSilmarillion.png",
        sinopse: "Histórias da criação do mundo e das primeiras eras da Terra-média.",
        audio: "audio/sinopse3.mp3"
    },
    {
        titulo: "Beren e Lúthien",
        autor: "J.R.R. Tolkien",
        ano: "2017",
        genero: "Fantasia/Romance",
        paginas: 288,
        capa: "img/placeholder4.jpg",
        sinopse: "O amor proibido entre o homem mortal Beren e a elfa imortal Lúthien.",
        audio: "audio/sinopse4.mp3"
    },
    {
        titulo: "Os Filhos de Húrin",
        autor: "J.R.R. Tolkien",
        ano: "2007",
        genero: "Fantasia/Tragédia",
        paginas: 320,
        capa: "img/placeholder5.jpg",
        sinopse: "A trágica história de Túrin Turambar e sua irmã Niënor, amaldiçoados por Morgoth.",
        audio: "audio/sinopse5.mp3"
    },
    {
        titulo: "A Queda de Númenor",
        autor: "J.R.R. Tolkien",
        ano: "2022",
        genero: "Fantasia/História",
        paginas: 400,
        capa: "img/placeholder6.jpg",
        sinopse: "O épico relato da ascensão e queda da grande ilha de Númenor.",
        audio: "audio/sinopse6.mp3"
    }
];

// Seletores
const livrosContainer = document.getElementById("livros");
const paginaInicial = document.getElementById("pagina-inicial");
const paginaDetalhes = document.getElementById("pagina-detalhes");
const detalhesContainer = document.getElementById("detalhes");
const voltarBtn = document.getElementById("voltar");

// Renderiza os livros na página inicial
livros.forEach((livro, index) => {
    const div = document.createElement("div");
    div.classList.add("livro");
    div.innerHTML = `
        <img src="${livro.capa}" alt="Capa do livro">
        <h3>${livro.titulo}</h3>
        <p>${livro.autor}</p>
    `;
    div.addEventListener("click", () => mostrarDetalhes(index));
    livrosContainer.appendChild(div);
});

// Mostra detalhes do livro selecionado
function mostrarDetalhes(index) {
    const livro = livros[index];
    detalhesContainer.innerHTML = `
        <h2>${livro.titulo}</h2>
        <img src="${livro.capa}" alt="Capa do livro">
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Ano:</strong> ${livro.ano}</p>
        <p><strong>Gênero:</strong> ${livro.genero}</p>
        <p><strong>Páginas:</strong> ${livro.paginas}</p>
        <p><strong>Sinopse:</strong> ${livro.sinopse}</p>
        <audio controls>
            <source src="${livro.audio}" type="audio/mpeg">
            Seu navegador não suporta áudio.
        </audio>
    `;
    paginaInicial.classList.add("hidden");
    paginaDetalhes.classList.remove("hidden");
}

// Botão de voltar
voltarBtn.addEventListener("click", () => {
    paginaInicial.classList.remove("hidden");
    paginaDetalhes.classList.add("hidden");
});
