import SQLicon from '../../Images/SQLicon.png'
import Unityicon from '../../Images/Unityicon.svg'
export default {
    Person: {
        name: "Lucas Baldasso",
        description :`Meu nome é Lucas Baldasso e sou um desenvolvedor fullstack especializado em backend, pronto para oferecer as melhores soluções para o seu negócio. Com 24 anos e atualmente estudando Engenharia de Software no 5º período, sou apaixonado por tecnologia e por desenvolver soluções que atendam às necessidades dos usuários. Minha principal stack é C# e .NET Core, mas sou extremamente flexível e habilidoso com diversas linguagens e frameworks de programação de backend. Meu foco principal é na Programação Orientada a Objetos, área na qual fiz uma pesquisa que foi apresentada na SAPIEN, uma Semana Acadêmica de Iniciação Científica da minha universidade. Valorizo o desenvolvimento pessoal e profissional em todos os ambientes. Possuo uma mente criativa e busco maneiras de melhorar e aperfeiçoar os ambientes e ferramentas com as quais trabalho. Minha paixão por compartilhar conhecimento me torna uma pessoa que sempre tenta ajudar colegas a entender a linha de raciocínio e ações. Sou aberto a sugestões e trabalho bem em equipes, sempre dando meu melhor nas atividades e ajudando colegas que possam ter dúvidas ou dificuldades. Mantenho uma boa comunicação com pessoas do meu setor, o que garante um fluxo de trabalho mais fluido.`,
        age: 24,
        title: "Engenheiro de Software",
        skills:[
            {
                name: "C#",
                image: "https://cdn.cdnlogo.com/logos/c/27/c.svg"
            },
            {
                name: "SQL",
                image: SQLicon
            },
            {
                name: "React",
                image: "https://cdn.cdnlogo.com/logos/r/63/react.svg"
            },
            {
                name: ".NET Core",
                image: "https://cdn.cdnlogo.com/logos/d/6/dot-net-core.svg"
            },
            {
                name: "Unity",
                image: Unityicon
            },
            {
                name: "Python",
                image: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
            },
            {
                name: "Java",
                image: "https://cdn.cdnlogo.com/logos/j/2/java.svg"
            },
            {
                name: "Azure DevOps",
                image: "https://zeevector.com/wp-content/uploads/Azure-Devops-Logo-Transparent.png"
            },
            {
                name: "HTML",
                image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
            },
            {
                name: "CSS",
                image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
            }
        ],
        experiences:[
            {
                name: "CMCorp",
                description: "Trabalhei como desenvolvedor backend, realizando queries em LINQ e SQL",
            },
            {
                name: "Programa de Monitoria Acadêmica",
                description: "Fui monitor da disciplina de Programação de Sistemas Computacionais I e II, onde é ensinado os fundamentos de programação para estudantes do primeiro ano da graduação. As disciplinas foram lecionadas utilizando C para fundamentos e Python para POO.",
            },
            {
                name: "AIDY Health",
                description: "Faço parte da AIDY como Desenvolvedor Backend Voluntário. Sou responsável por gerenciar o Banco de Dados, monitorar a IA e integrar a API para o consumo da aplicação móvel. Esta é minha primeira experiência em uma Empresa Internacional.",
            }
        ]
    }
}