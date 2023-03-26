import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import TeacherPic from '../../Assets/Images/TeacherPic.jpg'
import LanguageController from '../../Controller/LanguageController.ts'
import './styles.css'
export default function Profile() {
    
    useEffect(() => {
        document.addEventListener("languageChange", HandleChangeLanguage);
        return () => {
            document.removeEventListener("languageChange", HandleChangeLanguage);
        }
    }, []);
    function HandleChangeLanguage() {
        setPerson(LanguageController.instance.getPersonData());
        setMenuData(LanguageController.instance.getMenuData());
    }
    const [Person,setPerson] = useState(LanguageController.instance.getPersonData());
    const [MenuData, setMenuData] = useState(LanguageController.instance.getMenuData());
    return(
        <main>
            <Container>
                <h3>{MenuData.aboutMe}</h3>
                <h5 style={{fontStyle:'italic'}}>{Person.title}</h5>
                <div className='d-flex flex-row' id="about-me">
                    <p>{Person.description}</p>
                    <img src={TeacherPic} id="teacher-pic"/>
                </div>
                <h2>{MenuData.skills}</h2>
                <div className='d-flex flex-row gap-5 flex-wrap justify-content-center h-auto m-5'>
                    {Person.skills.map((skill, index) => {
                        return <img key={index} src={skill.image} alt={skill.name} className="skill-icon"/>
                    })}
                </div>
                <h2 className='ph-2'>{MenuData.experiences}</h2>
                <div className='m-0'>
                    {Person.experiences.map((experience, index) => {
                        return (
                            <div key={index} className="m-0 ph-5">
                                <h4>{experience.name}</h4>
                                <p className='m-0'>{experience.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </main>
    );
}