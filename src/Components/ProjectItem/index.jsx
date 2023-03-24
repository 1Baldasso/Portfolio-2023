import Container from "react-bootstrap/Container";
import './styles.css'
export default function ProjectItem(props)
{
    const project = props.project;
    let className1 = "m-5 d-flex gap-3 align-items-center justify-content-between p-3";
    if(project.id % 2 === 0)
        className1 += " flex-row-reverse left-item";
    else
        className1 += " flex-row right-item";

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