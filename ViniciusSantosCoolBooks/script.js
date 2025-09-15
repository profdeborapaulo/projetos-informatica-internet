//identifica o botão "Mais Livros" através da classe CSS
const maisLivrosBotao = document.querySelector(".mais-livros-botao");

//obtém o container dos livros adicionais através do ID
const additionalBooks = document.getElementById("livros-adicionais");

//Identifica a seta para baixo para poder alterar sua direção
const setaBaixo = document.querySelector(".arrow-down");

//Adiciona um evento de clique ao botão Mais Livros
maisLivrosBotao.addEventListener("click", () => {
  additionalBooks.classList.toggle("hidden");

  //altera a visibilidade dos livros adicionais
  //toogle serve para adicionar a classe hidden se ela não existir ou removê-la se já existir

if (additionalBooks.classList.contains('hidden')) {
        maisLivrosBotao.querySelector('span:first-child').textContent = 'MAIS LIVROS';
        setaBaixo.style.transform = 'rotate(0deg)';
    } else {
        maisLivrosBotao.querySelector('span:first-child').textContent = 'MENOS LIVROS';
        setaBaixo.style.transform = 'rotate(180deg)';
    }
});
  /*alterar o texto do botão
  if (additionalBooks.classList.contains("hidden")) {
    maisLivrosBotao.textContent = "MAIS LIVROS";
    setaBaixo.style.transform = "rotate(0deg)";
  } else {
    maisLivrosBotao.textContent = "MENOS LIVROS";
    setaBaixo.style.transform = "rotate(180deg)";
  }
}); */

//funcionalidade do carrossel

const trilhaCarrossel = document.querySelector(".carrossel-track");
const botaoAnterior = document.querySelector(".arrow-left");
const botaoProximo = document.querySelector(".arrow-right");
const cards = document.querySelectorAll(".livro-destaque-card");

//inicializa o índice do card atual e o numero de cards visiveis
let indiceCard = 0;
const cardsPorVisao = 1;

//função que atualiza a posição do carrossel
function atualizarCarrossel(){
  const larguraCard = cards[0].offsetWidth;//pega a largura do baguio
  trilhaCarrossel.style.transform = `translateX(-${indiceCard * larguraCard}px)`; //move a trilha do carrossel
}

//funcionamento do botão proximo
botaoProximo.addEventListener("click", () => {
  // Se estivermos no último card...
  if (indiceCard === cards.length - 1) { 
    indiceCard = 0; // ...voltamos para o início.
  } else { // Senão...
    indiceCard++; // ...apenas avançamos para o próximo.
  }
  atualizarCarrossel(); // Atualizamos a exibição
});

//mema coisa so que pro botao anterior
botaoAnterior.addEventListener("click", () =>{
  if(indiceCard > 0){
    indiceCard--;
    atualizarCarrossel();
  }
});

//funcionalidade do player de audio

let audioAtual = null; //armazena o audio que está tocando

const playersDeAudio = document.querySelectorAll(".audio-player"); //seleciona todos os players de audio

//adiciona evento de clique a cada player de audio
playersDeAudio.forEach(player => {
  const botaoReproduzirPausar = player.querySelector(".audio-button");
  const statusAudio = player.querySelector(".audio-status");
  const audio = player.querySelector("audio");

  //adiciona evento de clique ao botão de reproduzir/pausar
  botaoReproduzirPausar.addEventListener("click", () => {
    // Se um áudio diferente estiver tocando, pause-o e resete seu botão.
    if (audioAtual && audioAtual !== audio) {
      const playerAnterior = audioAtual.closest(".audio-player");
      if (playerAnterior) {
        audioAtual.pause();
        playerAnterior.querySelector(".audio-button").textContent = "▶";
        playerAnterior.querySelector(".audio-status").textContent = "Ouvir Resumo";
      }
    }

    // Alterna o estado de play/pause para o áudio clicado.
    if (audio.paused) {
      audio.play();
      botaoReproduzirPausar.textContent = "||";
      statusAudio.textContent = "Pausar Resumo";
      audioAtual = audio; // Define este como o áudio que está tocando.
    } else {
      audio.pause();
      botaoReproduzirPausar.textContent = "▶";
      statusAudio.textContent = "Ouvir Resumo";
      audioAtual = null; // Reseta, pois nenhum áudio está tocando ativamente.
    }
  });

  // Garante que o botão volte ao estado inicial quando o áudio terminar
  audio.addEventListener('ended', () => {
// ...existing code...
    statusAudio.textContent = "Ouvir Resumo";
    audioAtual = null;
  });
});

//essa array cria o "objeto" que representa cada livro para que a informação seja exposta na pagina através de um lint (url)
let livros = [
  {
    id: "1",
    titulo: "1984",
    autor: "George Orwell",
    capa: "css/img/1984-capa.jpg",
    sinopse: "Imagine um lugar onde o governo, liderado pelo \"Grande Irmão\", vigia tudo e todos, 24 horas por dia. Winston, o protagonista, trabalha no Ministério da Verdade, onde seu serviço é apagar e reescrever o passado. Cansado de tanta mentira e controle, ele resolve se rebelar para tentar encontrar a verdade, mesmo sabendo que isso pode custar sua vida.",
    isbn: "978-8535914849",
    ano: "2009",
    editora: "Companhia das Letras",
    paginas: "416",
    resenha_video: "https://www.youtube.com/embed/c6mK3xJ1G2Q"
  },
  {
    id: "2",
    titulo: "Sapiens: Uma Breve História da Humanidade",
    autor: "Yuval Noah Harari",
    capa: "css/img/sapiens-capa.jpg",
    sinopse: "Como foi que nós, Homo sapiens, saímos das cavernas e dominamos o planeta? O livro explica que nosso grande diferencial foi a habilidade de criar e acreditar em histórias coletivas, como deuses, leis e dinheiro. Foi essa capacidade de \"fofocar\" e cooperar em massa que nos permitiu construir cidades e nações inteiras.",
    isbn: "978-8543102176",
    ano: "2015",
    editora: "L&PM",
    paginas: "472",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
  {
    id: "3",
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    capa: "css/img/pequenoprincipe-capa.jpg",
    sinopse: "Um piloto perdido no deserto encontra um garotinho de outro planeta, o Pequeno Príncipe. Através das histórias do príncipe sobre suas viagens e os adultos estranhos que conheceu, o livro mostra como as pessoas grandes se preocupam com coisas sem importância e se esquecem do que realmente vale a pena, como a amizade e o amor. A grande lição é que \"o essencial é invisível aos olhos\".",
    isbn: "978-8582850311",
    ano: "2015",
    editora: "Agir",
    paginas: "96",
    resenha_video: "https://www.youtube.com/embed/rR9wWzD49-U"
  },
  {
    id: "4",
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    capa: "css/img/arteguerra-capa.jpg",
    sinopse: "Um tratado militar chinês escrito no século IV a.C. por Sun Tzu. O livro é composto por 13 capítulos, cada um dedicado a um aspecto da guerra, como planejamento, táticas e uso de espiões. É considerado uma obra-prima de estratégia e tática militar, e influenciou líderes políticos e militares de todo o mundo. Seus princípios são aplicados até hoje em contextos de negócios, esportes e vida pessoal.",
    isbn: "978-8571647834",
    ano: "1980",
    editora: "Jardim dos Livros",
    paginas: "160",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
  {
    id: "5",
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    capa: "css/img/codigo-capa.jpg",
    sinopse: "O simbologista Robert Langdon se envolve em uma corrida contra o tempo quando é chamado para o Museu do Louvre em Paris, onde o curador foi assassinado e uma série de códigos misteriosos foi deixada para trás. O livro é uma aventura eletrizante que nos leva por uma jornada de mistério e intriga, enquanto Langdon tenta desvendar uma conspiração que envolve a Igreja Católica e uma sociedade secreta.",
    isbn: "978-8528613133",
    ano: "2003",
    editora: "Arqueiro",
    paginas: "432",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
  {
    id: "6",
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    capa: "css/img/guiamochileiro-capa.jpg",
    sinopse: "A vida na Terra estava prestes a acabar para dar lugar a uma via expressa espacial. Felizmente, um humano chamado Arthur Dent, que é o último da sua espécie, foi salvo por seu amigo Ford Prefect, um alienígena que estava disfarçado na Terra. A partir daí, a dupla viaja pelo espaço e encontra todo tipo de criaturas estranhas e situações hilárias, em busca da resposta para a pergunta mais importante de todas: o sentido da vida, do universo e de tudo mais.",
    isbn: "978-8528613133",
    ano: "1979",
    editora: "Suma de Letras",
    paginas: "208",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
  {
    id: "7",
    titulo: "Mulheres que Correm com os Lobos",
    autor: "Clarissa P. Estés",
    capa: "css/img/mulheresquecorrem-capa.jpg",
    sinopse: "O livro é um mergulho no universo feminino, que explora a importância de reconectar com a nossa natureza selvagem e instintiva. Através de mitos e contos de fadas, Clarissa Pinkola Estés, uma psicanalista junguiana, mostra como as mulheres podem se libertar das amarras da sociedade e redescobrir sua força interior e criatividade. Uma obra poderosa e inspiradora que te fará refletir sobre o seu lugar no mundo.",
    isbn: "978-8532506456",
    ano: "1992",
    editora: "Rocco",
    paginas: "576",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
  {
    id: "8",
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    capa: "css/img/senhordosaneis-capa.jpg",
    sinopse: "A saga épica de um hobbit humilde, Frodo Bolseiro, que é encarregado de uma missão impossível: destruir um anel mágico e poderoso forjado pelo maléfico Senhor do Escuro, Sauron. Para ter sucesso, Frodo deve ir para as profundezas de Mordor, a terra de Sauron, e jogar o anel na Montanha da Perdição. Nessa jornada, ele conta com a ajuda de uma inesperada sociedade de hobbits, elfos, anões e humanos.",
    isbn: "978-8533614275",
    ano: "1954",
    editora: "HarperCollins",
    paginas: "1200",
    resenha_video: "https://www.youtube.com/embed/yPjJqfJ2M7Y"
  },
];
const livrosCards = document.querySelectorAll(".livro-destaque-card, .book-card");
livrosCards.forEach((card) => {
  card.addEventListener("click", () => {
    // 1. Pega o ID que colocamos no atributo 'data-id' do HTML
    const livroId = card.dataset.id;
 
    // 2. Encontra o livro correspondente no array usando o ID
    const livroSelecionado = livros.find(livro => livro.id === livroId);
 
    // 3. Se o livro for encontrado, continua o processo
    if (livroSelecionado) {
      // Converte o objeto do livro para uma string no formato JSON
      const livroJsonString = JSON.stringify(livroSelecionado);
 
      // Codifica a string para que ela possa ser usada com segurança em uma URL
      const livroJsonUrlEncoded = encodeURIComponent(livroJsonString);
 
      // Redireciona o usuário para a página de detalhes, passando o livro na URL
      window.location.href = `livro-detalhes.html?livro=${livroJsonUrlEncoded}`;
    } else {
      console.error(`ERRO: Livro com o ID "${livroId}" não foi encontrado na base de dados (array 'livros').`);
    }
  });
})
