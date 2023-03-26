import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import './styles.css'
import ProjectItem from "../ProjectItem";
import LanguageController from "../../Controller/LanguageController.ts";
import {useEffect, useState} from "react";

export default function Main()
{
    useEffect(()=>{
        document.addEventListener("languageChange",HandleChangeLanguage);
        return ()=>{
            document.removeEventListener("languageChange",HandleChangeLanguage);
        }
    },[]);
    const [MenuData, setMenuData] = useState(LanguageController.instance.getMenuData());
    const [Projects,setProjects] = useState(LanguageController.instance.getProjectData());
    function HandleChangeLanguage()
    {
        setProjects(LanguageController.instance.getProjectData());
        setMenuData(LanguageController.instance.getMenuData());
    }
    
    return(
        <main>
            <Container className="pt-5">
                <h1>{MenuData.projects}</h1>
                <Tabs
                    defaultActiveKey="Backend"
                >
                    <Tab eventKey="Backend" title={MenuData.fullstack} className="pb-3">
                        {Projects.Backend.map((project)=>{
                            return(
                                <ProjectItem key={project.id} project={project}/>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="Games" title={MenuData.gameProgrammer} className="pb-3">
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