/*
    ### Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios 
        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function showingBooksOfAugustoCury(library){
    let booksOfAugustoCury = ["Books of Augusto Cury"];
    for(let i = 0; i < library.length; i++){
        for(let j = 0; j < library[i].books.length; j++){
            if(library[i].books[j].author == "Augusto Cury"){
                booksOfAugustoCury.push(library[i].books[j].title);
            }
        }
    }
    return booksOfAugustoCury.join("\n");
}

function countNumberOfCategoriesAuthorsAndBooks(library){
    let biblioteca = [];
    let numberCategories = "Numero categorias encontradas: " + library.length;
    biblioteca.push(numberCategories);
    let numberBooks;
    let numberAuthors;
    let authors;
    for(let i = 0; i < library.length; i++){
        numberBooks = `Numero de livros encontrados na categoria ${i+1}: ` + library[i].books.length;
        biblioteca.push(numberBooks);
        authors = library[i].books.length;
        for(let j = 0; j < library[i].books.length; j++){
            let author = library[i].books[j].author.split(" ");
            for(let a = 0; a < author.length; a++){
                if(author[a] == "e"){
                    authors += 1;
                }
            }
        }
        numberAuthors = `Numero de autores encontrados na categoria ${i+1}: ` + authors;
        biblioteca.push(numberAuthors);
    }
    return biblioteca;
}

function countNumberOfAuthors(library){
    let authors = [];
    for(let i = 0; i < library.length; i++){
        for(let j = 0; j < library[i].books.length; j++){
            authors.push(library[i].books[j].author);
        }
    }
    return authors.join("\n");
}

function browseBooksByAuthor(library, autor){
    let accountant = 0;
    let booksOfAutor = [`Books of author: ${autor}`];
    for(let i = 0; i < library.length; i++){
        for(let j = 0; j < library[i].books.length; j++){
            if(library[i].books[j].author == autor){
                booksOfAutor.push(library[i].books[j].title);
            }
        }
    }
    if(booksOfAutor.length != 1){
        return booksOfAutor.join("\n");
    } else {
        return `No books by the author ${autor} were found`;
    }  
    
}
