# Principais comandos GITS mais úteis

git log (ver o log dos commits que voce enviou)
git ls (listar os arquivos do repositorio)
git add . (adicionar todos os arquivos da pasta no stage area)
git commit (colocando no repositorio)
git log -n 5 (mostrar somente os ultimos 5 comits)
git log --oneline (mostrar commit de modo mais simples)
git log --since (data) desde (ve desde a data que vc digitar até a atual)
git log --until (data)  anterior (ve os comits anteriores a data q colocou)
git log --author (ve os commits por autor)
git log --grep="mensagem commit" (ve os commits por algum tipo de mensagem)
TOUCH readme.md (adicionar um arquivo)
git add *.md (adicionar todos arquivos.md)
git status (ver os status do que vc fez anteriorormente)
git diff (mostra as alterações q vc fez) 
git diff --staged (ve a diferença entre o ultimo commit e o arquivo no stage area)
git rm (para remover algum arquivo)
git reset HEAD . (tirar um arquivo do stage area)
git restore --staged nomearquivo (tirar arquivo do stage area)
git commit --amend -m "mudar a mensagem do commit"
git add .
git commit --amend -m "altera o ultimo commit com as mudanças novas" :wq
ls -al (ver todos os itens da pasta)
git checkout (um pedaço da hash) -- README.md (nomedoarquivo que quer recuperar)
git revert > diretorio tem que estar limpo
git revert HEAD-5 :wq
pwd (ver que pasta esta atualmente)
git diff (ve as alterações que rolaram no arquivo)
git commit -am "mnsagem commit" (quando vc ja possui uma pasta .git, voce pode usar esse comando que soma o git add . com o commit"
git show (iniciais da hash) te mostra todas as modificações de um commit com o inicial commit
git show --color words (mostra as palavras que foram modificadas)