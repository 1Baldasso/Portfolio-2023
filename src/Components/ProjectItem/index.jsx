import { useEffect, useState } from "react";
import './styles.css'
export default function ProjectItem(props)
{
    const [isRow, setIsRow] = useState(true);
    const handleResize = () => {
        if(window.innerWidth < 1048){
            setIsRow(false);
        }
        else{
            setIsRow(true);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
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
        <div id="reset-a">
            <div className={className1}>
                <div className="w-75">
                    <h2 style={{textAlign:"center"}}>{project.name}</h2>
                    <p>{project.description}</p>
                    <h5>Release status:</h5>
                    <p>{project.date}</p>
                    <h5>Techs</h5>
                    <p>{project.techs}</p>
                    
                </div>
                <div className="w-50">
                    <img src={project.image} className="project-image mb-3"/>
                    {project.projectUrl && <>
                        <h5>Repository:</h5>
                        <a target="_blank" href={project.projectUrl}>{project.projectUrl}</a>
                    </>}
                    {project.liveUrl && 
                    <>
                        <h5>Live:</h5>
                        <a target="_blank" href={project.liveUrl}>{project.liveUrl}</a>
                    </>}
                </div>
            </div>
        </div>
    );
}