### Descrição

Repositório destinado a armazenar as implementações de código utilizando TDD.

***

### Exercícios

- Estrutura de dados
  - Stack
  - Queue
  - Linked List
  - Hash Table
- Financial
  - Operação de soma e multiplicação entre moedas de câmbio diferentes.
- Fibonacci
- JSUnit
  - Código para testar outros códigos (xUnit).
- Números Romanos
  - Converter números decimais para romanos e números romanos para decimais.

***

### Introdução

TDD (Test Drive Development) foi criado por kent Beck por volta de 2003. Kent Beck é engenheiro de software e signatário do manifesto ágil (2001), criador da metodologia de desenvolvimento chamada Extreme Programming (1996) e também foi criador da SUnit para Smalltalk (1989). Essa última foi a base para o surgimento no mercado porteriormente para os diversos frameworks de teste como o JUnit para java.

#### O que é o TDD?
TDD é uma metodologia que permite que desenvolvamos a nossa implementação através da orientação de testes. Esse modelo segue o seguinte ciclo:
1. Adicionar um teste rapidamente
2. Rodar todos os teste e ver o mais novo falhando
3. Fazer uma pequena mudança
4. Rodar todos os testes e ver todos funcionando
5. Refatorar para remover duplicações.
Isso é popularmente resumido em três passos: 
1. Testar (Red)
2. Codificar (Green)
3. Refatorar (Blue)

Na etapa inicial escrevemos um teste que falha, depois corrigimos os erros minimamente apenas para o teste passar, depois iniciamos um refatoração simples. Esse é um processo circular que fica se repetindo durante todo o desenvolvimento da implementação.

#### Livro

Para essa série de exercícios foi usado o livro: Test Driven Development: By Example, Kent Beck.

#### Padrões para TDD

A seguir elenco em resumo e sintetizado alguns padrões que o livro descreve.

#### Padrões gerais
- Como deve ser um teste?
  - Um teste deve ter um cenário, um operação que retornar um resultado e uma verificação para avaliar se o resultado é igual ao valor esperado. Ou seja, cenário, resultado obtido e resultado esperado.
- Escreva um teste
  - Como você testa seu software?
  - Com testes automatizados.
- Teste isolado
  - Como a execução de um teste deveria afeatar outro teste?
  - Em nada.
- Lista de testes
  - O que deveria ser testado?
  - Antes de começar a implementação escreve uma lista de testes que são evidentes na implementação. Esse será seu ponto de início.

#### Padrões de barra vermelha

- Teste de um só passo.
  - Qual é o próximo teste que devo pegar na lista?
  - Pegue um teste que você acreditar ser o melhor para seguir na sua linha de raciocínio da implementação da tarefa. Não tem ordem certa, apenas a ordem que você escolher.
- Teste inicial
  - Com qual teste você deveria começar?
  - O mais simples possível, aquele que pode ser posto para funcionar em poucos passos.
-  Teste de aprendizado
   - Quando escrever teste para aplicações de teceiros?
   - Antes de chamar a aplicação diretamente no seu código, crie um teste para aprender como a aplicação externa funciona. 
- Outro teste
  - O que fazer quando um novo teste surge?
  - Acrescenteo ao final da lista des testes a fazer e siga na linha do que você estava já fazendo.
- Teste de regressão
  - O que fazer quando um defeito é informado?
  - Siga naturalmente o ciclo do TDD. Criar teste, Código para passar e Rafatoração para remover duplicações.
- Pausa
  - Esta travado ou cansado?
  - Faça uma pausa.
- Faça de novo
  - O que fazer quando se está perdido?
  - A solução pode ser começar tudo do zero novamente e buscar outra forma de resolver a tarefa.


#### Padrões de barra verde

- Fazer de conta
  - O que fazer quando o teste não funciona na primeira implementação?
  - Retorna uma constante que o faça passar.
- Triangular
  - Como testar de forma mais segura?
  - Aplique o conceito de triangulação, ou seja, crie uma segunda asserção para o teste que o faça falhar. Assim teremos uma asserção em verde e outra em vermelho, com isso, faça o teste passar córrigindo o código.
- Implementação óbvia
  -  Como implementar operações simples?
  -  Faça a implementação mais óbvia para dada tarefa.
- Um para muitos
  - Como implementar uma operação que funciona com coleções de objetos?
  - Implementa-a sem as coleções para passar no teste, depois a faça funcionar com as coleções na refatoração.

#### Padrões de projeto

Padrões de projetos comuns em TDD:

| Padrão                    |   Escrita de teste  |   Refatoração    |
| ---                       | :---:               | :---:            |
| Command                   |          X          |                  |
| Value Object              |          X          |                  |
| Null Object               |                     |         X        |
| Template Method           |                     |         X        |
| Pluggable Object          |                     |         X        |
| Pluggable Selector        |                     |         X        |
| Factory Method            |          X          |         X        |
| Imposter                  |          X          |         X        |
| Composite                 |          X          |         X        |
| Collecting Parameter      |          X          |         X        |

#### Refatoração

Na parte da refatoração o programador deve seguir as recomendações para deixar o código em bom estado. Além de refatorar o código em produção também deve-se refatorar o teste do momento para que ele fique simples sempre.

- Padrões de projeto
- Clean Code
- Solid
- Dependecy Injection
- Clean Architecture


#### Recomendações

- No TDD, é recomendado a darmos passos pequenos na implementação. Mas cada cenário exige adaptações, então pode ser necessário dar passos um pouco maiores ou até bem grandes.
- O TDD deve te ajudar a modelar a aplicação para ser testada e ser de fácil compreensão.
- Os teste devem cobrir: condicionais, laços, operações e polimorfismo.
- Os testes devem ser autoexplicativos.
- Os teste devem ser pequenos e desacoplados.
- Os teste devem ser rápidos de executar, caso demorem é sinal de que algo não está muito bem projetado.
- Os teste devem ser independentes um do outro.
- O número de testes a ser escrito depende sempre da percepção do programador para a implementação segura da tarefa. Devemos lembrar que TDD não é o mesmo que teste unitário, mas uma modalidade de desenvolver software, logo bem diferente.
- Devemos apagar testes apenas quando tivermos redundância.
