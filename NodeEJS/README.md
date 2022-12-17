# Criando uma pagina usando NODE + EJS

## Conteúdo aprendido sobre express para usar o localhost ouvindo a porta 8080 e abrindo os arquivos EJS

~~~Javascript 
    const express = require('express');
    const app = express();

    app.set("view engine", "ejs"); // a ferramenta que vamos usar para ver o html vai ser o ejs

    app.get("/", function(req, res){
        res.render("pages/index");
    });

    app.get("/sobre", function(req, res){
        res.render("pages/about");
    });

    app.listen(8080);
    console.log("Servindor funcionando..."); 
~~~


## Separando partes de códigos compartilhadas do HTML, para usar mais de uma vez em outros arquivos

Comando: `<%- include('header'); %>` usado para incluir um header compartilhado em outros arquivos .ejs

ex: 
`
    <!DOCTYPE html>
        <%- include('../partials/head'); %>
        <body class="container">
            <%- include('../partials/header'); %>
            <main>
                <div>
                    <h1>Sobre mim</h1>
                    <p>Oi sou o João Marangoni aluno da RocketSeat e estou me divertindo muito aprendendo sobre EJS</p>
                </div>
            </main>
            <%- include('../partials/footer'); %>
        </body>
    </html>
`