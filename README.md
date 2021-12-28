# ShibaGallery

Um projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.1.2.

Intuito de aprender os conceitos de angular. Os conceitos serão apresentados abaixo no readme

## Rodando o projeto

basta instalar as dependencias com npm install e usar o comando ng serve após isso

## Criando projeto angular

Iniciamos um projeto com o comando ng new após instalar o angular cli
A sigla ng é apenas uma abreviação fonética da palavra Angular
Ao digitar esse comando, será questionado sobre o routing e que tipo de css deseja utilizar

O bom do angular, é que ao utilizar o ng new é criada toda a estrutura necessária para o projeto, com os arquivos, diretórios e scripts necessários para desenvolvimento da aplicação

A arquitetura do angular é baseada em componentes, que são como se fossem blocos de construção adicionados conforme a necessidade.

Isso torna o desenvolvimento flexivel, pois é muito fácil reutilizar código sem reescrevê-los

O angular é totalmente tipado por conta do typescript

## Como o angular trabalha

## Router

O roteamento é necessário para carregar os componentes e informações sem a necessidade de recarregar a página

Com isso torna o angular um SPA ( Single page Application )

Quando você habilita o routing na criação do projeto, é criado um arquivo chamado app-routing-module dentro da src/app

Esse arquivo já vem com as importações criadas e configurações de um arquivo de roteamento

Dentro do arquivo terá um array com o nome de routes
Lá onde serão configuradas as rotas da sua aplicação.

Lembrando que podem existir rotas internas para cada módulo

Lembrando que quando voce define o roteamento no app-routing para outro módulo, dentro do módulo que voce está apontando deve ser indicado para qual componente a rota aponta

## Módulos

`ng g m nomedomodulo --routing`

Um módulo em Angular 2 é algo que é feito de componentes, diretivas, serviços, etc. Um ou vários módulos se combinam para criar um Aplicativo. Aplicação de quebra de módulos em partes lógicas de código. Cada módulo executa uma única tarefa.

É como se fosse uma central lógica do que estou tentando desenvolver.

Um módulo gerencia quais são os componentes, importações e exportações da funcionalidade

Um componente é dependente de um módulo.
Por exemplo, um componente nao pode usar os imports que nao estão dentro do módulo que o declara

## Componentes

`ng g c nomedocomponente`

Um componente é uma "versão" simplificada de uma diretiva, que basicamente são marcadores ou extensões de elementos que compõem o DOM, estes marcadores informam ao AngularJS para inserir alguma funcionalidade específica a esse elemento.

a vantagem dos componentes é criar trechos de códigos reaproveitáveis de maneira trivial, o que substitui a criação de diretivas com configurações mais complexas.

Quando voce cria um componente dentro da pasta do módulo, automaticamente o módulo reconhece esse componente através do angular cli

O componente é criado com um arquivo html, css, um arquivo de teste e o seu arquivo typescript , desta forma mantendo a organização do código

## Instalando dependencias externas

No projeto mostrado utilizei o bootstrap
E eventualmente em um projeto grande serão utilizadas várias bibliotecas css e javascript

Elas devem ser instaladas via npm, utilizaremos o bootstrap como exemplo

Para instalar o bootstrap, deve ser instalado com o `npm i bootstrap --save`

após instalar, o bootstrap estará disponivel na pasta node_modules

então basta configurar no arquivo de configurações do angular (angular.json) que a aplicação irá utilizar o bootstrap

No caso do bootstrap, não é necessário importar nada nesse arquivo pois não há scripts, apenas estilos, mas caso necessário seriam adicionados lá e então os módulos teriam acesso a estes scripts

Então no arquivo de styles principal, dentro da pasta raíz, basta importar os estilos que estão dentro da node_modules do bootstrap

`@import '~bootstrap/dist/css/bootstrap.min.css';`

os scripts do bootstrap podem ser instalados com o ngx bootstrap

## Services

`ng g s caminhodoarquivo`

O serviço sempre será gerado com a nomenclatura Service após o seu nome
Por exemplo se eu rodei o comando ng g s shiba/services/shiba, será gerado um arquivo com a classe ShibaService

A utilização de Serviços tem o propósito de organizar o projeto de software Angular, isolando lógica de negócio e separando-a dos Controllers. Não é possível afirmar que seja obrigatório utilizar serviços, mas é muito desejável.

São instanciados apenas uma vez durante o tempo de vida de um aplicativo. Eles contêm métodos que mantêm os dados ao longo da vida de um aplicativo, ou seja, os dados não são atualizados e estão disponíveis o tempo todo.

No topo do arquivo possuem o decorador `@Injectable`, que marca a classe disponivel para ser fornecida e injetada como uma dependencia

No tempo em que utilizei o angular, percebi que sua arquitetura torna as dependencias muito separadas umas das outras, porém o serviço é uma exceção já que para utilizar um serviço a dependencia deve ser injetada no momento que o componente for instanciado

## App

No app, você define as configurações globais de css, scripts e html do projeto

Pode inclusive criar um template como navbar e footer, e como é utilizado o roteamento, deve-se adicionar a tag router-outlet dentro do html do app, para que o angular entenda que está sendo direcionado


## Angular material

`ng add @angular/material`

O Angular Material é uma implementação do Material Design no Angular feita pela Google. Ele é composto por diversos componentes, bibliotecas CSS e outros elementos, e, faz parte do gerenciador de pacotes do Node o NPM, podendo ser considerado mais um recurso que você pode adicionar ao seu projeto Angular.

Ao instalar ele pede a configuração de cores do projeto, mas voce pode fazer a sua paleta de cores customizada também
