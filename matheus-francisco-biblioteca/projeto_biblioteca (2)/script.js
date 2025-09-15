let biblioteca = {
    nome: "Biblioteca Novo Mundo",
    endereco: "Rua Piraporão, 1000",
    livros:[
        {
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            ano: 1899
        },
        {
            titulo: "Quincas Borba",
            autor: "Machado de Assis",
            ano: 1891
        },
        {
            titulo: "Laços de Família",
            autor: "Clarice Lispector",
            ano: 1988
        },
    ]
}

    //console.log(biblioteca)
    function mostrarLivros() {
        const div= document.getElementById("saida");
        div.innerHTML= `<h2> ${biblioteca.nome} </h2>
        <p><strong>Endereço:</strong> ${biblioteca.endereco}</p>
        <h3> Livros Disponíveis: </h3>`;
        
        biblioteca.livros.forEach(function(livro){
            div.innerHTML +=
            `<div class="livro">` + 
            `<strong> Título: </strong>` + livro.titulo + `<br> ` + 
            `<strong> Autor: </strong>` + livro.autor + `<br> ` +
            `<strong> Ano de Publicação: </strong>` + livro.ano + `<br> ` +
            `</div>` + `<br>`;
            });
        }

        slide.innerHTML = `
            <h3>${tituloHtml}</h3>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Ano:</strong> ${livro.ano}</p>
        `;
        track.appendChild(slide);
    });

    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // 2. Função para mover o carrossel
    const moveToSlide = (targetIndex) => {
        track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
        currentIndex = targetIndex;
    }

    // 3. Event Listeners para os botões
    prevButton.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        moveToSlide(newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        moveToSlide(newIndex);
    });
});