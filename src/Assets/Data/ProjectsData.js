import Flower from '../Images/Projects/Flowers.png'
import FullstackStore from '../Images/Projects/FullstackStore.png'
import FakeClockIn from '../Images/Projects/FakeClockIn.png'
import LaravelAPI from '../Images/Projects/LaravelAPI.png'
import LORPrototiper from '../Images/Projects/LORPrototiper.jpg'
import SquidCardGame from '../Images/Projects/SquidCardGame.png'
import MiaIsBackHome from '../Images/Projects/MiaIsBackHome.png'
import Runner25D from '../Images/Projects/Runner25D.jpg'
export default 
{ 
    Projects: 
    {
        "Backend":[
            {
                "id":1,
                "name":"Flower Budget Backend",
                "description":"I made this project while working in the family company. I've seen the pain during the daily basis of ordering flowers weekly. This project was restarted twice. The first time I had just started using WinForms and the second time I touched it, the way it was felt messy. The second time I had experience with C# and .NET Architecture, so the code got cleaner and more understandable.",
                "image":Flower,
                "projectUrl":"https://github.com/lufloresdecor/Orcamento-de-Flores",
                "date":"In Progress",
                "techs":"C#, .NET, Entity Framework, SQL Server, Windows Forms"
            },
            {
                "id":2,
                "name":"Fake Store Fullstack",
                "description":"This project was made as part of a job interview. I had to make a fullstack project. I've created my own backend and API using Entity Framework and SQL Server, and used ASP.NET MVC for frontend. The authentication was made by encrypting the password and comparing it to the one in the database.",
                "image":FullstackStore,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-ComunikiMe",
                "date":"02-26-2023",
                "techs":"C#, RESTful API ,ASP.NET MVC, Entity Framework, SQL Server"
            },
            {
                "id":3,
                "name":"Fake Clock In System",
                "description":"This project was also made as part of a job interview. I've created my own backend and API using Entity Framework and SQL Server. The main goal of this project was to validate the business rules of the system. And following the TDD principle. the business rules included not letting the user clock in or out if the time was not between 8:00 and 18:00. Also, not letting the user clock in or out if he already clocked in or out. No frontend was made. The project was made in 22 hours.",
                "image":FakeClockIn,
                "projectUrl":"https://github.com/1Baldasso/Desafio-Teste-Ilia",
                "date":"02-17-2023",
                "techs":"C#, RESTful API, Entity Framework, SQL Server"
            },
            {
                "id":4,
                "name":"Laravel API",
                "description":"This project was the first API I made and it was made outside my confort zone it was made with PHP+Laravel. I've created the backend and API while studying and understanding PHP syntax. It was a simple API project which had a CRUD of stores and products and some transformation of data going under resources and controllers. No frontend was made.",
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
                "description":"A project I've done as a study of OOP aspects, Unity game development, and C# events. I am proud of this project cause it is the whole implementation of an existing card game, Legends of Runeterra. It was a great experience and I was able to implement most of the existing behaviour of the game. The game is still under development.",
                "image":LORPrototiper,
                "projectUrl":"https://github.com/1Baldasso/My-Card-Game",
                "date":"In Progress",
                "techs":"C#, Unity, OOP, API, Events"
            },
            {
                "id":2,
                "name":"The Squid Card Game",
                "description":"This game was made as part of a job interview for a game developer position. I've made the game in 2 days. The game has simple mechanics but it was all made from scratch. All the design and code was made by me. A design document was made before the development of the game. The game was made in Unity and C# and utilized Scriptable Objects.",
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