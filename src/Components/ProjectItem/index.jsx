import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import './styles.css'
export default function ProjectItem(props)
{
    const [isRow, setIsRow] = useState(true);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Define o breakpoint
    
        // Função a ser executada quando a largura da tela mudar
        const handleMediaQueryChange = (event) => {
          if (event.matches) {
            setIsRow(false); // Se a tela for menor que 768px, muda para flex-column
          } else {
            setIsRow(true); // Caso contrário, muda para flex-row
          }
        };
    mediaQuery.addEventListener("change",handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery);
    return () => {
        mediaQuery.removeEventListener("change",handleMediaQueryChange);
        };
    }, []);
    const project = props.project;
    const pureClassName = "m-5 d-flex gap-3 align-items-center justify-content-between p-3";
    let className1 = "";
    if(!isRow)
    {
        className1 = pureClassName + " flex-column-reverse";
    }
    else if(project.id % 2 === 0)
        className1 = pureClassName + " flex-row-reverse left-item";
    else
        className1 = pureClassName + " flex-row right-item";
    return(
        <a href={project.projectUrl} target="_blank" id="reset-a">
            <div className={className1}>
                <div>
                    <h2 style={{textAlign:"center"}}>{project.name}</h2>
                    <p>{project.description}</p>
                    <h5>Release status:</h5>
                    <p>{project.date}</p>
                    <h5>Techs</h5>
                    <p>{project.techs}</p>
                </div>
                <img src={project.image} className="project-image"/>
            </div>
        </a>
    );
}