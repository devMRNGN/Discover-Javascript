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