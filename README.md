# nlwAgents - Let me ask (RocketSeat)

## Chat Application for question in streams/lives
- a aplicação tem o intuito de ser um banco de perguntas e respostas para a comunidade que está assistindo a stream/live
- poder interagir com as questões (curtir, responder, comentar)
- conseguir visualizar todas as perguntas feitas durante a stream
- ordenar as questões mais curtidas, onde as mais curtidas (quantidade de pessoas que gostaria que a questão fosse respondida) vão para o topo e assim, a pessoa que está fazendo a live, poderá focar nesta pergunta

## Usando uma IA no projeto
- tentar prever respostas automatizada para essas perguntas conforme são feitas e conforme o conteúdo daquela live foi feito até ali
funciona da seguinte maneira: ficar gravando a live, a cada 10/20s pega o audio falado na live stream até ali, envia para uma IA para que ela faça a transcrição desse audio
- depois pega a transcrição, alimenta um BD e quando o usuario fizer uma pergunta, a IA também é utilizada para tentar responder a pergunta desse usuário com algum conteúdo que já entregue pelo apresentador da stream
- Ex: uma live de React, no inicio da live se explica o que é React e alguem aos 50min de live fala "Não sei o que é react" -  a ideia é que a IA consiga responder automaticamente essa pessoa e sempre deixando em aberto se precisa de uma interação pessoal
