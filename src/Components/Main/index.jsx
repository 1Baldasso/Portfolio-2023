import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProjectsData from "../../Assets/Data/ProjectsData";
import './styles.css'
import ProjectItem from "../ProjectItem";

export default function Main()
{
    const Projects = ProjectsData.Projects;
    return(
        <main>
            <Container className="pt-5">
                <h1>Projects</h1>
                <Tabs
                    defaultActiveKey="Backend"
                >
                    <Tab eventKey="Backend" title="Fullstack Engineering" className="pb-3">
                        {Projects.Backend.map((project)=>{
                            return(
                                <ProjectItem key={project.id} project={project}/>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="Games" title="Game Programmer" className="pb-3">
                        {Projects.Games.map((project)=>{
                            return(
                                <ProjectItem key={project.id*366} project={project}/>
                            )
                        })}
                    </Tab>
                </Tabs>
            </Container>
        </main>
    );
}