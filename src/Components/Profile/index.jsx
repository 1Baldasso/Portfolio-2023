import Container from 'react-bootstrap/Container'
import PersonData from '../../Assets/Data/PersonData'
import TeacherPic from '../../Assets/Images/TeacherPic.jpg'
import './styles.css'
export default function Profile() {
    const Person = PersonData.Person
    return(
        <main>
            <Container>
                <h3>About me</h3>
                <h5 style={{fontStyle:'italic'}}>{Person.title}</h5>
                <div className='d-flex flex-row' id="about-me">
                    <p>{Person.description}</p>
                    <img src={TeacherPic} id="teacher-pic"/>
                </div>
                <h2>Skills</h2>
                <div className='d-flex flex-row gap-5 flex-wrap justify-content-center h-auto m-5'>
                    {Person.skills.map((skill, index) => {
                        return <img key={index} src={skill.image} alt={skill.name} className="skill-icon"/>
                    })}
                </div>
                <h2 className='ph-2'>Notable Experiences</h2>
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