import { useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../../Controller/LanguageProvider'
import Container from 'react-bootstrap/Container'
import TeacherPic from '../../Assets/Images/TeacherPic.jpg'
import TooltippedImage from '../TooltippedImage'
import './styles.css'

export default function Profile() {
    const {person, menuData} = useContext(LanguageContext);
    const [className, setClassname] = useState('d-flex flex-row')
    const handleResize = () => {
        if(window.innerWidth < 768){
            setClassname('d-flex flex-column')
        }
        else{
            setClassname('d-flex flex-row')
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return(
        <main>
            <Container>
                <h3>{menuData.aboutMe}</h3>
                <h5 style={{fontStyle:'italic'}}>{person.title}</h5>
                <div className={className} id="about-me">
                    <p>{person.description}</p>
                    <img src={TeacherPic} id="teacher-pic"/>
                </div>
                <h2>{menuData.skills}</h2>
                <div className='d-flex flex-row gap-5 flex-wrap justify-content-center h-auto mt-5 mb-0'>
                    
                    {person.skills.map((skill, index) => {
                        return <TooltippedImage key={index} skill={skill} />
                    })}
                </div>
                {/* <h2 className='ph-2'>{MenuData.experiences}</h2>
                <div className='m-0'>
                    {Person.experiences.map((experience, index) => {
                        return (
                            <div key={index} className="m-0 ph-5">
                                <h4>{experience.name}</h4>
                                <p className='m-0'>{experience.description}</p>
                            </div>
                        )
                    })}
                </div> */}
            </Container>
        </main>
    );
}