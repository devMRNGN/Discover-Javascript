# Visualização e Comunicação

MESSAGE -> pedido(request), resposta(response), request/response <br>

PEDIDO -> Methods, Headers, Body <br>

Methods -> Definição de tipo do pedido, Qual ação eu quero fazer no servidor <br>
Exemplo Methods -> GET, POST <br>
GET -> Pegar um recurso <br>
POST -> Enviar um recurso <br>

Response/Resposta -> Status code -> Exemplo 200(OK), 301(Redirection), 404(Page NotFound), 500(Erro interno de servidor) <br>

Request/Response -> Body -> HTML, Conteúdo, JSON <br>

## Request MESSAGE

GET/index.html HTTP/1.1 <br>
User-Agent: Mozilla/4.0 <br>
Accept: text/html

## Response MESSAGE

HTTP/1.1 200 OK <br>
Server: express <br>
Content-Type: text/html <br> <br>
<html>....</html>

## Important!

Browser -> Request -> Servidor <br>
Browser <- Response <- Servidor