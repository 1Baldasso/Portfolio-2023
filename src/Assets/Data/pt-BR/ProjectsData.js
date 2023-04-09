import Flower from '../../Images/Projects/Flowers.png'
import FullstackStore from '../../Images/Projects/FullstackStore.png'
import FakeClockIn from '../../Images/Projects/FakeClockIn.png'
import LaravelAPI from '../../Images/Projects/LaravelAPI.png'
import LORPrototiper from '../../Images/Projects/LORPrototiper.jpg'
import SquidCardGame from '../../Images/Projects/SquidCardGame.png'
import MiaIsBackHome from '../../Images/Projects/MiaIsBackHome.png'
import Runner25D from '../../Images/Projects/Runner25D.jpg'
import FullstackStoreNode from '../../Images/Projects/FullstackStoreNode.png';

export default 
{ 
    Projects:
    {
        "Backend":[
            {
                "id":1,
                "name":"Loja Fake Projeto Fullstack",
                "description":"Este projeto foi criado como parte de uma entrevista de emprego. Fui solicitado a desenvolver um projeto fullstack e, para isso, criei meu próprio backend e API utilizando o Entity Framework e o SQL Server, e utilizei o ASP.NET MVC para o frontend. A autenticação foi realizada através da criptografia da senha e comparação com a senha armazenada no banco de dados.\n Esta experiência me proporcionou uma ótima oportunidade para aprimorar minhas habilidades em desenvolvimento fullstack e me desafiar a trabalhar com ferramentas e tecnologias que ainda não havia utilizado anteriormente.",
                "image":FullstackStore,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-ComunikiMe",
                "date":"02-26-2023",
                "techs":"C#, RESTful API ,ASP.NET MVC, Entity Framework, SQL Server"
            },
            {
                "id":2,
                "name":"Fullstack Store Node + React",
                "description":"Eu desenvolvi um projeto Fullstack como parte de um teste para a vaga de desenvolvedor, utilizando NodeJS e React no backend e frontend, respectivamente. O projeto consiste em uma listagem de produtos que pode ser filtrada por categoria (ex: frios, laticínios) e ordenada por critérios como menor preço, maior preço ou nome. O frontend também possui um recurso de pesquisa por nome de produto e uma tela de detalhes para cada item listado.\n Além disso, foi implementado um carrinho de compras com botões para adicionar e remover itens, exibindo apenas o valor total do carrinho (sem checkout). No backend, foi desenvolvida uma API REST seguindo as boas práticas do Clean Code, com testes unitários e documentação do código. O banco de dados escolhido foi o MongoDB.\n O objetivo do projeto foi demonstrar minhas habilidades como desenvolvedor Fullstack, utilizando tecnologias modernas e populares como NodeJS, React e MongoDB, além de aplicar conceitos de Clean Code, testes unitários e documentação de código.",
                "image":FullstackStoreNode,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-NodeReact",
                "date":"04-07-2023",
                "techs":"Node JS, RESTful API, NestJS, React, MongoDB"
            },
            {
                "id":3,
                "name":"Sistema de Ponto",
                "description":"Este projeto também foi criado como parte de uma entrevista de emprego. Desenvolvi meu próprio backend e API utilizando o Entity Framework e o SQL Server. O principal objetivo deste projeto foi validar as regras de negócios do sistema, seguindo o princípio TDD. As regras de negócios incluíam não permitir que o usuário batesse o ponto se o horário não estivesse entre 8h e 18h e não permitir que o usuário batesse o ponto duas vezes seguidas. Nenhum frontend foi desenvolvido. O projeto foi concluído em 22 horas.\n Estou satisfeito com o resultado alcançado e com a oportunidade de aprimorar minhas habilidades em desenvolvimento ágil. Além disso, pude experimentar diferentes técnicas e metodologias para desenvolver sistemas de alta qualidade em um curto espaço de tempo.",
                "image":FakeClockIn,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-Ilia",
                "date":"02-17-2023",
                "techs":"C#, RESTful API, Entity Framework, SQL Server"
            },
            {
                "id":4,
                "name":"API Laravel",
                "description":"Este projeto foi a primeira API que criei e foi desenvolvido fora da minha zona de conforto, utilizando PHP+Laravel. Criei o backend e a API enquanto estudava e entendia a sintaxe do PHP. Foi um projeto simples de API, que consistia em um CRUD de lojas e produtos, além de algumas transformações de dados através de resources e controllers. Nenhum frontend foi desenvolvido.\n Estou muito feliz com o resultado, pois consegui aprender uma nova linguagem e um novo framework, além de aplicar esses conhecimentos em um projeto real. Foi uma ótima oportunidade para me desafiar e sair da minha zona de conforto, o que me ajudou a crescer como desenvolvedor.",
                "image":LaravelAPI,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Laravel",
                "date":"02-14-2023",
                "techs":"PHP, RESTful API, Laravel, MySQL"
            },
            {
                "id":5,
                "name":"Orçamento Semanal de Flores",
                "description":"Durante o meu tempo trabalhando na empresa da minha família, desenvolvi um projeto que surgiu da necessidade diária de encomendar flores semanalmente. Testemunhei o quão doloroso e ineficiente esse processo pode ser, e decidi criar uma solução para torná-lo mais eficaz e simplificado.\n O projeto foi iniciado duas vezes: na primeira, eu estava começando a usar o WinForms e, na segunda, após um intervalo de tempo, percebi que a abordagem anterior estava confusa e imprecisa. Nessa segunda tentativa, com mais experiência em C# e Arquitetura .NET, consegui reescrever o código com mais clareza e organização, tornando-o muito mais fácil de entender e utilizar.",
                "image":Flower,
                "projectUrl":"https://github.com/lufloresdecor/Orcamento-de-Flores",
                "date":"Em andamento",
                "techs":"C#, .NET, Entity Framework, SQL Server, Windows Forms"
            }
        ],
        "Games":[
            {
                "id":1,
                "name":"Legends Of Runeterra Clone",
                "description":"Este projeto foi feito como um estudo sobre os aspectos da POO, desenvolvimento de jogos com Unity e eventos C#. Estou orgulhoso deste projeto, pois se trata da implementação completa de um jogo de cartas existente, Legends of Runeterra. Foi uma ótima experiência e fui capaz de implementar a maior parte do comportamento existente no jogo. O jogo ainda está em desenvolvimento.\n Acredito que este projeto me proporcionou uma oportunidade incrível de aprender e aplicar novos conceitos de programação orientada a objetos e desenvolvimento de jogos, além de me desafiar a implementar um jogo complexo. Foi uma grande satisfação poder contribuir para o desenvolvimento de um projeto que me interessa muito e espero continuar trabalhando nele para aprimorar ainda mais minhas habilidades.",
                "image":LORPrototiper,
                "projectUrl":"https://github.com/1Baldasso/My-Card-Game",
                "date":"In Progress",
                "techs":"C#, Unity, OOP, API, Events"
            },
            {
                "id":2,
                "name":"The Squid Card Game",
                "description":"Este jogo foi criado como parte de uma entrevista de emprego para uma posição de desenvolvedor de jogos. Eu fiz o jogo em 2 dias. O jogo tem mecânicas simples, mas foi todo feito do zero. Todo o design e código foi criado por mim. Um documento de design foi criado antes do desenvolvimento do jogo. O jogo foi feito em Unity e C# e utilizou Scriptable Objects.\n Estou bastante satisfeito com o resultado do jogo e acredito que essa experiência me proporcionou uma oportunidade incrível de demonstrar minhas habilidades como desenvolvedor de jogos. Foi uma ótima oportunidade para mostrar minhas habilidades em design e programação e espero ter a oportunidade de continuar a desenvolver jogos incríveis no futuro.",
                "image":SquidCardGame,
                "projectUrl":"https://github.com/1Baldasso/Teste-0xgs",
                "date":"01-31-2023",
                "techs":"C#, Unity, OOP, Scriptable Objects, Events, Animations"
            },
            {
                "id":3,
                "name":"Mia is Back Home",
                "description":"O primeiro jogo que desenvolvi. Foi criado como projeto final para a disciplina de Jogos Digitais. Foi inspirado pela minha gata chamada Mia.",
                "image":MiaIsBackHome,
                "projectUrl":"https://1baldasso.itch.io/mias-back-home",
                "date":"11-25-2021",
                "techs":"C#, Unity, Animations"
            },
            {
                "id":4,
                "name":"Runner 2.5D",
                "description":"Um minijogo também desenvolvido como parte da disciplina de Jogos Digitais, como estudo de Animações, Sons e Efeitos de Partículas.",
                "image":Runner25D,
                "projectUrl":"https://1baldasso.itch.io/runner-25d",
                "date":"03-12-2022",
                "techs":"C#, Unity, Animations, Audio Clips, Particle Effects"
            } 
        ]
    }
}