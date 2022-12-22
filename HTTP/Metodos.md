# Metodos(verbos HTTP)

## HTTP Methods

* Define um conjunto de métodos HTTP <br>
* Indica a ação que o cliente deseja operar <br>
* Podem ser chamados de verbos HTTP <br>
* Cada um possui a sua semântica <br>

### Caracteristicas

-> *Seguro* <br>

* Não altera o status do servidor <br>
* Somente leitura  <br>
* Cliente não solicita alterações <br>
* Não há carga extra para o servidor <br>
* O servidor é responsável em manter o método seguro <br>
-> Quais são? <br>
* GET -> Get /search.html HTTP/1.1 <br>
* HEAD <br>
* OPTIONS <br>

-> *Idempotente* <br>

* Ao executar um método a resposta deverá ser sempre a mesma <br>
-> Quais são? <br>
* Todos os seguros são idempotentes
* PUT (Não é seguro[Atualizar algum recurso])<br>
* DELETE(Não é seguro[Deletar algum recurso])<br>
* Status code poderá ser diferente <br>
* O servidor tem responsabilidade de retornar dados da mesma maneira <br>
* Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente <br>