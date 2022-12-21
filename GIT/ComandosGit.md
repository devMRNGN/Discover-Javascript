# Principais comandos GITS mais úteis

git log (ver o log dos commits que voce enviou) <br>
git ls (listar os arquivos do repositorio) <br> 
git add . (adicionar todos os arquivos da pasta no stage area) <br>
git commit (colocando no repositorio) <br>
git log -n 5 (mostrar somente os ultimos 5 comits) <br> 
git log --oneline (mostrar commit de modo mais simples) <br>
git log --since (data) desde (ve desde a data que vc digitar até a atual) <br>
git log --until (data)  anterior (ve os comits anteriores a data q colocou) <br> 
git log --author (ve os commits por autor) <br> 
git log --grep="mensagem commit" (ve os commits por algum tipo de mensagem) <br>
TOUCH readme.md (adicionar um arquivo) <br> 
git add *.md (adicionar todos arquivos.md) <br> 
git status (ver os status do que vc fez anteriorormente) <br>
git diff (mostra as alterações q vc fez) <br>
git diff --staged (ve a diferença entre o ultimo commit e o arquivo no stage area)<br>
git rm (para remover algum arquivo)<br>
git reset HEAD . (tirar um arquivo do stage area)<br>
git restore --staged nomearquivo (tirar arquivo do stage area)<br>
git commit --amend -m "mudar a mensagem do commit"<br>
git add .<br>
git commit --amend -m "altera o ultimo commit com as mudanças novas" :wq<br>
ls -al (ver todos os itens da pasta)<br>
git checkout (um pedaço da hash) -- README.md (nomedoarquivo que quer recuperar)<br>
git revert > diretorio tem que estar limpo<br>
git revert HEAD-5 :wq<br>
pwd (ver que pasta esta atualmente)<br>
git diff (ve as alterações que rolaram no arquivo)<br>
git commit -am "mnsagem commit" (quando vc ja possui uma pasta .git, voce pode usar esse comando que soma o git add . com o commit"<br>
git show (iniciais da hash) te mostra todas as modificações de um commit com o inicial commit<br>
git show --color words (mostra as palavras que foram modificadas) <br>
git pull  (puxa oq voce alterou no github (nuvem) para a maquina local)