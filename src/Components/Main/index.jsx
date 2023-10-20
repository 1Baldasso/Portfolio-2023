import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProjectItem from "../ProjectItem";
import { LanguageContext } from "../../Controller/LanguageProvider";
import { useContext, useEffect } from "react";
import './styles.css'

export default function Main()
{
    const {menuData, projects} = useContext(LanguageContext);
    useEffect(() => {
        console.log(projects);
    }, [])
    return(
        <main>
            <Container className="pt-5">
                <h1>{menuData.projects}</h1>
                <Tabs
                    defaultActiveKey="Backend"
                >
                    <Tab eventKey="Backend" title={menuData.fullstack} className="pb-3">
                        {projects.Backend.map((project)=>{
                            return(
                                <ProjectItem key={project.id} project={project}/>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="Games" title={menuData.gameProgrammer} className="pb-3">
                        {projects.Games.map((project)=>{
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