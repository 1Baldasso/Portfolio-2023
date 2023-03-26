import Flower from '../../Images/Projects/Flowers.png'
import FullstackStore from '../../Images/Projects/FullstackStore.png'
import FakeClockIn from '../../Images/Projects/FakeClockIn.png'
import LaravelAPI from '../../Images/Projects/LaravelAPI.png'
import LORPrototiper from '../../Images/Projects/LORPrototiper.jpg'
import SquidCardGame from '../../Images/Projects/SquidCardGame.png'
import MiaIsBackHome from '../../Images/Projects/MiaIsBackHome.png'
import Runner25D from '../../Images/Projects/Runner25D.jpg'
export default 
{ 
    Projects: 
    {
        "Backend":[
            {
                "id":1,
                "name":"Flower Budget Backend",
                "description":"I developed this project while working for my family's company, aiming to address the daily struggle of weekly flower ordering. Witnessing the inefficiencies and pains our team experienced, I sought to create a solution that would simplify and streamline the process. The project underwent two iterations, the first using WinForms and the second requiring a restart due to its messy implementation. With enhanced expertise in C# and .NET Architecture, I was able to write cleaner, more comprehensible code, resulting in a highly efficient and user-friendly solution.",
                "image":Flower,
                "projectUrl":"https://github.com/lufloresdecor/Orcamento-de-Flores",
                "date":"In Progress",
                "techs":"C#, .NET, Entity Framework, SQL Server, Windows Forms"
            },
            {
                "id":2,
                "name":"Fake Store Fullstack",
                "description":"As part of a job interview, I created a full-stack project that allowed me to showcase my skills in back-end and front-end development. Using Entity Framework and SQL Server, I developed a custom backend and API, and utilized ASP.NET MVC for the front-end. Authentication was implemented by encrypting passwords and comparing them to those stored in the database. This project provided me with the opportunity to expand my knowledge and experience working with new tools and technologies, while honing my full-stack development skills.",
                "image":FullstackStore,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-ComunikiMe",
                "date":"02-26-2023",
                "techs":"C#, RESTful API ,ASP.NET MVC, Entity Framework, SQL Server"
            },
            {
                "id":3,
                "name":"Fake Clock In System",
                "description":"This project was also developed as part of a job interview, with a focus on creating a robust backend and API using Entity Framework and SQL Server. The main goal was to validate the system's business rules, following the TDD principle. These rules included preventing users from clocking in or out outside of working hours (between 8:00 and 18:00), and preventing them from clocking in or out multiple times in a row. No frontend was developed for this project, which was completed within a tight timeframe of just 22 hours.\n I'm pleased with the outcome of this project and the opportunity it provided to enhance my skills in agile development. I was able to experiment with different techniques and methodologies to deliver a high-quality system in a short amount of time.",
                "image":FakeClockIn,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-Ilia",
                "date":"02-17-2023",
                "techs":"C#, RESTful API, Entity Framework, SQL Server"
            },
            {
                "id":4,
                "name":"Laravel API",
                "description":"This project was my first API, and it was outside my comfort zone as I used PHP+Laravel. I created the backend and API while immersing myself in understanding PHP syntax. The project was a simple API that involved a CRUD of stores and products, along with some data transformation under resources and controllers. No frontend was developed for this project.\n I am pleased with the outcome as I learned a new language and framework, and was able to apply this knowledge to a real-world project. It was a great opportunity for me to challenge myself and step out of my comfort zone, which helped me grow as a developer.",
                "image":LaravelAPI,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Laravel",
                "date":"02-14-2023",
                "techs":"PHP, RESTful API, Laravel, MySQL"
            }
        ],
        "Games":[
            {
                "id":1,
                "name":"Legends Of Runeterra Clone",
                "description":"I've undertaken this project as a study on OOP concepts, Unity game development, and C# events. I'm proud of this project because it represents the full implementation of an existing card game, Legends of Runeterra. It was an amazing experience, and I was able to implement most of the existing game mechanics. The game is still in development, and I believe this project has provided me with an incredible opportunity to learn and apply new OOP concepts and game development skills. Moreover, it challenged me to implement a complex game. It was a great satisfaction to be able to contribute to the development of a project that I am very interested in, and I look forward to continuing working on it to further enhance my skills.",
                "image":LORPrototiper,
                "projectUrl":"https://github.com/1Baldasso/My-Card-Game",
                "date":"In Progress",
                "techs":"C#, Unity, OOP, API, Events"
            },
            {
                "id":2,
                "name":"The Squid Card Game",
                "description":"As part of a job interview for a game developer position, I created this game within just two days. Despite having simple mechanics, I made everything from scratch, from the game design to the code. Prior to the game development, I created a comprehensive design document to guide me throughout the process. The game was developed in Unity and C#, and I utilized Scriptable Objects to enhance its performance.\n I'm extremely satisfied with the game's outcome, as this experience allowed me to showcase my skills as a game developer. It was a great opportunity to demonstrate my expertise in game design and programming, and I hope to continue developing amazing games in the future.",
                "image":SquidCardGame,
                "projectUrl":"https://github.com/1Baldasso/Teste-0xgs",
                "date":"01-31-2023",
                "techs":"C#, Unity, OOP, Scriptable Objects, Events, Animations"
            },
            {
                "id":3,
                "name":"Mia is Back Home",
                "description":"The first game developed by me. It was developed as final project for the Digital Games Discipline. It was inspired by my cat called Mia.",
                "image":MiaIsBackHome,
                "projectUrl":"https://1baldasso.itch.io/mias-back-home",
                "date":"11-25-2021",
                "techs":"C#, Unity, Animations"
            },
            {
                "id":4,
                "name":"Runner 2.5D",
                "description":"A minigame also developed as part of the Digital Games Discipline as a study for Animations and Sounds and Particle Effects.",
                "image":Runner25D,
                "projectUrl":"https://1baldasso.itch.io/runner-25d",
                "date":"03-12-2022",
                "techs":"C#, Unity, Animations, Audio Clips, Particle Effects"
            } 
        ]
    }
}