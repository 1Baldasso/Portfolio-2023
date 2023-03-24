import Container from 'react-bootstrap/Container';
import SocialMediaData from '../../Assets/Data/SocialMediaData';
import Sapien from '../../Assets/Images/SAPIEN.png'
import './styles.css'
export default function SocialMedia() {
    const Social = SocialMediaData.Socials;
    return(
        <main>
            <Container>
                <div className='d-flex flex-row gap-5 p-5 align-items-center justify-content-around'>
                    <div className='d-flex flex-column gap-5'>
                        {Social.map((item, index) => {
                            let itemClass = "social-item";
                            if(item.id === 2) itemClass += " invert-color"
                            return(
                            <a key={index} href={item.url} target="_blank">
                                <div className='d-flex flex-row gap-5 align-items-center'>
                                    <img className={itemClass} src={item.icon} alt={item.name}/>
                                    <p>{item.content}</p>
                                </div>
                            </a>
                        )})}
                    </div>
                    <img src={Sapien} alt="SAPIEN" id="sapien-image"/>
                </div>
            </Container>
        </main>
    );
}