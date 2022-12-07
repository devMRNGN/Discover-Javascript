// getElementById()
const element = document.getElementById('blog-title') // Element

// getElementByClassName()
const classElement = document.getElementsByClassName('one'); // HtmlColection

// getElementsByTagName()
const tagElement = document.getElementsByTagName('body'); // HtmlColection

// querySelector() Seleciona só um, ele seleciona como se fosse o css, id = #, class = . e etc...
const querySelector = document.querySelector('.one'); // Element

// querySelectorAll() Seleciona varios e voce pode usar forEach()
const querySelectorAll = document.querySelectorAll('meta'); // NodeList

// Manipulando conteúdo
// Text content

const elementH1 = document.querySelector('h1');

elementH1.textContent += " Olá Devs!"; // altera conteudo texto do elemento

// innerText

elementH1.innerText = "Olá Devs!"; // troca texto interno do seu elemento html

// innerHTML

elementH1.innerHTML = "Olá Devs! <small>!!!</small>"; // capaz de inserir HTML dentro do conteúdo, tags e etc

// Manipular valor de um INPUT

const input = document.querySelector('input');

input.value = "Valor que eu quiser"; // Coloca um valor ao input, ou seja o input ja vem com coisas dentro

// Manipular atributos

const header = document.querySelector('header');
header.setAttribute('id','header'); // Colocando um atributo ID no header
const headerID = document.querySelector('#header');
header.removeAttribute('id');
header.removeAttribute('class');
header.setAttribute('class','bg header');

// Alterando estilo

const elementStyle = document.querySelector('body');
element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor);

// alterar estilos com class list

const elementClassList = document.querySelector('body');
elementClassList.classList.add('active');
// console.log(element.classList);
elementClassList.classList.remove('active');
elementClassList.classList.toggle('active');

// pegando os elementos pai

const body = document.querySelector('body');

body.parentNode; // pegando o elemento pai do body

// pegando os elementos filhos

const el = document.querySelector('body');

el.childNodes; /* pegando os filhos do body ou */ el.children // pegando os filhos só que retorna em formato HTMLCollection

// somente o primeiro filho

el.firstChild // retorna o primeiro filho, porém caso seja um espaço em branco, ele retorna o espaço e não um elemento

el.firstElementChild // Esse sim retornara o primeiro filho que seja um ELEMENTO, ignorando os espaços

// ultimo filho

el.lastChild // retorna o ultimo filho contadno espaços

el.lastElementChild // retorna o ultimo filho que seja um ELEMENTO

// NAVEGAR PELOS ELEMENTOS IRMÃOS

const whatever = document.querySelector('body script'); // Pegando o irmão do script que está dentro do body

// nextSibling nextElementSibling (proximo irmão)

whatever.nextSibling // conta os espaços
whatever.nextElementSibling // Ignora os espaços

// irmão anterior previousSibling previousElementSibling

whatever.previousSibling // conta espaços
whatever.previousElementSibling // ignora os espaços 

// IMPORTANT ******* CRIAR E ADICIONAR ELEMENTOS **********

//create element

const div = document.createElement('div');
div.innerText = "Olá Devs!";

// append = adicionar depois / preppend = adicionar antes

const bodyy = document.querySelector('body');

body.append(div); // adicionando depois do script(ultimo filho do body) a div contendo "olá devs!"

body.preppend(div); // adiciona antes, vai pegar o body e adicionar a div como primeiro filho 

// Insert Before (adicionando itens em posições diferentes de primeira e ultima)
const script = body.querySelector('script');

body.insertBefore(div, script) // recebe dois argumentos 1 o elemento que eu quero por no caso (div) e segundo atras de qual elemento
// before = antes o segundo argumento é antes de qual elemento a div irá ser adicionada, no caso está sendo adicionada antes do script

// simulando um insertAfter colocando depois
const headerr = document.querySelector('header');
body.insertBefore(div, headerr.nextElementSibling)
