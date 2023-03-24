import './styles.css'
export default function Footer()
{
    return(
        <footer className="footer d-flex flex-row justify-content-between h-auto">
            <h4>Developed by Lucas Baldasso using <span id="react-item">React.JS</span></h4>
            <p>Source code <a href="https://github.com/1baldasso" target={'_blank'}>here</a></p>
            <div className="d-flex flex-column">
                <ul>
                    <li>Lucas Baldasso</li>
                    <li>Software Engineering Student</li>
                    <li>Fullstack Developer (BE focused)</li>
                    <li>Guarapuava, Paraná - Brazil</li>
                </ul>
            </div>                        
        </footer>
    );
}