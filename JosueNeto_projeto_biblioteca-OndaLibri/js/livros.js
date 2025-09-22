// js/books.js
// Lista de livros: edite as entradas para corresponder aos arquivos de imagem e áudio.
const BOOKS = [
  {
    id: 1,
    title: "Jurassic Park",
    author: "Michael Crichton",
    autor: "MichaelCrichton",
    cover: "img/Jurassic_Park.jpg",
    coverLarge: "img/Jurassic_Park.jpg",
    synopsis: "Após descobrir uma impressionante técnica de recuperação e clonagem de DNA pré-histórico, o bilionário John Hammond consegue algo que parecia impossível: criar uma espécie de parque de diversões com criaturas extintas há eras. Para atestar a viabilidade e a segurança de seu empreendimento, convida alguns cientistas renomados para um final de semana no lugar. Mas algo sai do controle. O que parecia ser uma aventura fascinante torna-se uma luta pela sobrevivência.",
    audio: "assets/audio/jurassic_sinopse.mp3",
    year:  "20 de novembro de 1990",
    ISBN:  "85-332-0148-6",
    genre: { id: "romance", name: "Romance" },
    paginas: 528,
    rating: 4.3,
    reviews: 102
  },
  {
    id: 2,
    title: "Fábulas",
    author: "La Fontaine",
    cover: "img/Fabulas.jpg",
    coverLarge: "img/Fabulas.jpg",
    synopsis: "Considerado o pai da fábula moderna, La Fontaine tornou-se conhecido internacionalmente com suas criações inspiradas nas tradições clássica e oriental. Fábulas é sua obra mais famosa. Escrita em versos, com uma linguagem simples e atraente que conquista imediatamente seus leitores, inclui histórias mundialmente conhecidas, como A cigarra e a formiga, O corvo e a raposa e A lebre e a tartaruga. La Fontaine trata de temas universais, como a vaidade, a estupidez e o vício humanos, retratados por meio dos animais. Segundo ele, sua obra “é uma pintura em que podemos encontrar nosso próprio retrato”. Esta edição é uma antologia de suas mais importantes composições, traduzidas por célebres escritores brasileiros e portugueses, com ilustrações de Grandville.",
    audio: "assets/audio/fabulas_sinopse.mp3",
    year:  "23 julho 2012",
    ISBN:  "8572328637",
    genre: { id: "infantil", name: "Infatil" },
    paginas: 262,
    rating: 4.6,
    reviews: 58
  },
  // Adicione pelo menos 6 objetos (mínimo exigido)
  {
    id: 3,
    title: "O Livro Do Bill",
    author: "Alex Hirsch",
    cover: "img/Bill.jpeg",
    coverLarge: "img/Bill.jpeg",
    synopsis: "Você sentiu falta dele? Admita, você sentiu falta dele. Alex Hirsch, autor best-seller do The New York Times, ressuscita este infame vilão e convida os fãs a conhecerem a perspectiva de Bill Cipher sobre o universo de Gravity Falls. O demônio que aterrorizou Gravity Falls VOLTOU do além para finalmente contar seu lado da história em um novo livro escrito por ninguém menos do que o próprio Bill Cipher.",
    audio: "assets/audio/bill_sinopse.mp3",
    year: "22 março 2024",
    genre: { id: "terror", name: "Terror" },
    ISBN:  "978-6556096681",
    paginas: 209,
    rating: 4.8,
    reviews: 23
  },
  {
    id: 4,
    title: "O Gato Viajante",
    author: "Hiro Ariwaka",
    cover: "img/Gato_Viajante.jpg",
    coverLarge: "img/Gato_Viajante.jpg",
    synopsis: "O gato Nana está viajando pelo Japão. Ele não sabe muito bem para onde está indo ou por que, mas ele está sentado no banco da van prata de Satoru, seu dono. Lado a lado, eles cruzam o país para visitar velhos amigos. O fazendeiro durão que acredita que gatos só servem para caçar ratos, o simpático casal dono de uma pousada que aceita animais, e o marido abandonado pela esposa que ama animais. Mas qual é o motivo dessa viagem? E por que todos estão tão interessados em Nana e Satoru? Ninguém sabe muito bem o que está acontecendo e Satoru não diz nada, mas quando Nana descobrir o motivo da viagem, seu pequeno coração passará por uma das mais difíceis provas de suas sete vidas.",
    audio: "assets/audio/gato_sinopse.mp3",
    year: "25 agosto 2017",
    genre: { id: "romance", name: "Romance" },   
    ISBN:  "8556520480",
    paginas: 256,
    rating: 4.8,
    reviews: 80
  },
  {
    id: 5,
    title: "Morro Dos Ventos Uivantes",
    author: "Emily Brontë",
    cover: "img/Uivantes.webp",
    coverLarge: "img/Uivantes.webp",
    synopsis: "Único romance da escritora inglesa Emily Brontë, O morro dos ventos uivantes retrata uma trágica história de amor e obsessão em que os personagens principais são a obstinada e geniosa Catherine Earnshaw e seu irmão adotivo, Heathcliff. Grosseiro, humilhado e rejeitado, ele guarda apenas rancor no coração, mas tem com Catherine um relacionamento marcado por amor e ódio.",
    audio: "assets/audio/uivantes_sinopse.mp3",
    year: "17 junho 2019",
    genre: { id: "romance", name: "Romance" },
    ISBN:  "8594318235",
    paginas: 368,
    rating: 4.7,
    reviews: 44
  },
  {
    id: 6,
    title: "Amor Ou Algo Assim",
    author: "Mariana Chazanas",
    cover: "img/Algo_Assim.jpg",
    coverLarge: "img/Algo_Assim.jpg",
    synopsis: "Raffa passou a vida inteira tentando esquecer Caê. Esquecer o bullying diário, aqueles olhos verdes e o último dia em que se viram, quando Caê disse “você é meu” e tudo explodiu. Mais de dez anos se passaram, e Raffa agora está no auge ― é estrela da novela mais popular do país, rico, atraente e no controle da própria vida; não está mais à mercê de ninguém. Então, por que ainda sonha com um acerto de contas?",
    audio: "assets/audio/algosassim_sinopse.mp3",
    year: "31 agosto 2023",
    genre: { id: "romance", name: "Romance" },
    ISBN:  "655532368X",
    paginas: 304,
    rating: 4.7,
    reviews: 12
  },
    {
    id: 7,
    title: "Cosmos",
    author: "Carl Sagan",
    cover: "img/cosmos.jpg",
    coverLarge: "img/cosmos.jpg",
    synopsis: "Escrito por um dos maiores divulgadores da ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, abordando a origem da vida, o cérebro humano, missões espaciais, a morte do Sol, a evolução das galáxias e os pensadores que moldaram a ciência moderna. Com prosa clara e envolvente, Carl Sagan conecta ciência a história, arte e filosofia, revelando os segredos do planeta azul e nossa busca por identidade no vasto espaço. Publicado em 1980, continua sendo uma das mais importantes obras de divulgação científica, refletindo o fascínio humano pelo conhecimento.",
    audio: "audios/cosmos.mp3",
    year: "6 novembro 2017",
    genre: { id: "astronomia", name: "Astronomia" },
    ISBN:  "8535929886",
    paginas: 488,
    rating: 4.9,
    reviews: 12
  },
  {
    id: 8,
    title: "Eu, Robõ",
    author: "Isaac Asimov",
    cover: "img/eurobo.jpg",
    coverLarge: "img/eurobo.jpg",
    synopsis: "Um dos maiores clássicos da literatura de ficção científica, Eu, Robô, escrito por Isaac Asimov, é um conjunto de nove contos interconectados pela Dra. Susan Calvin, que apresenta seus relatos sobre a evolução dos autômatos através do tempo. É nessa obra que Asimov apresenta as célebres Três Leis da Robótica, princípios que regem o comportamento dos autômatos em toda a sua trajetória.",
    audio: "audios/eurobo.mp3",
    year: "24 novembro 2014",
    genre: { id: "astronomia", name: "Astronomia" },
    ISBN:  "8576572001",
    paginas: 320,
    rating: 4.8,
    reviews: 12
  },
  {
    id: 9,
    title: "Universo",
    author: "Will Gater",
    cover: "img/Universo.jpg",
    coverLarge: "img/Universo.jpg",
    synopsis: "Uma jornada visual repleta de fotografias, ilustrações e histórias que revelam segredos de mais de 100 objetos celestes, com fatos surpreendentes e descobertas empolgantes sobre o Universo. Nesse livro, o leitor explora o Sistema Solar e o espaço além, aprendendo sobre eclipses, nascimento de planetas, explosões estelares, colisões de galáxias e muitos outros fenômenos fascinantes.",
    audio: "audios/universo.mp3",
    year: "5 novembro 2024",
    genre: { id: "astronomia", name: "Astronomia" },
    ISBN:  "6555648791",
    paginas: 224,
    rating: 4.8,
    reviews: 12
  },
  {
    id: 10,
    title: "2001",
    author: "Arthur C. Clarke",
    cover: "img/2001.jpg",
    coverLarge: "img/2001.jpg",
    synopsis: "Nos primórdios da humanidade, quando a fome e os predadores ameaçavam a raça humana, chega à Terra um objeto inusitado, inacessível à limitada compreensão da mente pré-histórica, mas que influencia os homens a descobrir coisas que permitem a sua própria evolução. Milhões de anos depois, a descoberta de um monólito soterrado na Lua deixa os cientistas perplexos. Para investigar esse mistério, a Terra envia ao espaço uma equipe altamente treinada. Porém, o surgimento de pequenas falhas levanta a suspeita de que há algo errado com a missão.",
    audio: "audios/2001.mp3",
    year: "16 setembro 2015",
    genre: { id: "astronomia", name: "Astronomia" },
    ISBN:  "9788576571711",
    paginas: 326,
    rating: 4.7,
    reviews: 12
  }
];

const GENERO = [
  { genero: { id: "astronomia", name: "Astronomia" } },
  { genero: { id: "aventura", name: "Aventura" } },
  { genero: { id: "drama", name: "Drama" } },
  { genero: { id: "historia", name: "História" } },
  { genero: { id: "romance", name: "Romance" } },
  { genero: { id: "terror", name: "Terror" } }
];

const AUTORES = [
  {
    id: 1,
    name: "Carlos Drummond",
    img: "img/Carlos_Drummond.jpg",
    bio: "Ana Costa é um(a) autor(a) renomado(a) com diversas obras publicadas."
  },
  {
    id: 2,
    name: "Clarice",
    img: "img/clarice.png",
    bio: "João Silva é um(a) autor(a) renomado(a) com diversas obras publicadas."
  },
  {
    id: 3,
    name: "Emily Brontë",
    img: "img/Emily_Brontë.jpg",
    bio: "Maria Souza é um(a) autor(a) renomado(a) com diversas obras publicadas."
  },
  {
    id: 4,
    name: "La Fontaine",
    img: "img/La_Fontaine.jpg",
    bio: "Carlos Lima é um(a) autor(a) renomado(a) com diversas obras publicadas."
  },
  {
    id: 5,
    name: "Machado de Assis",
    img: "img/machado.jpg",
    bio: "Maria Souza é um(a) autor(a) renomado(a) com diversas obras publicadas."
  },
  {
    id: 6,
    name: "Michael Crichton",
    img: "img/MichaelCrichton.jpg",
    bio: "Michael Crichton nasceu em 1942 em Chicago, no estado de Illinois. Graduou-se na Harvard Medical School, defendendo seu doutorado em Políticas Públicas pelo Salk Institute for Biological Studies. Escreveu mais de quinze romances, além de livros de não ficção e diversos roteiros para TV e cinema. É o criador da série ER – Plantão Médico e, por ela, ganhou um Emmy de Melhor Série Dramática em 1996. Steven Spielberg, que adaptou sua obra-prima para o cinema, considerava-o a pessoa mais imaginativa que já conhecera. Faleceu em 2008."
  }
]

   // pega o parâmetro da URL (ex: genero.html?id=aventura)
    const url = new URL(window.location.href);
    const generoId = url.searchParams.get("id");

    const titulo = document.getElementById("titulo-genero");
    const lista = document.getElementById("lista-livros");

    if (generoId) {
      // acha o gênero
      const g = GENERO.find(x => x.genero.id === generoId);
      if (g) {
        titulo.textContent = `Livros do gênero: ${g.genero.name}`;
      }

      // filtra os livros daquele gênero
      const livrosGenero = BOOKS.filter(b =>
        b.genre.id.toLowerCase() === generoId.toLowerCase()
      );

      if (livrosGenero.length === 0) {
        lista.innerHTML = "<p>Nenhum livro encontrado neste gênero.</p>";
      } else {
        livrosGenero.forEach(b => {
          const card = document.createElement("div");
          card.className = "livro-card";
          card.innerHTML = `
            <a href="livro.html?id=${b.id}">
              <img src="${b.cover}" alt="${b.title}">
              <h3>${b.title}</h3>
              <p>${b.author}</p>
            </a>
          `;
          lista.appendChild(card);
        });
      }
    }
