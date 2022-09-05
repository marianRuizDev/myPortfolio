import hello from "./hello.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hello() {
    return (
        <div className="home" id="home">
            <div className="intro">
                <div className="home-title">
                    <h1 >I'm Mariangel Ruiz</h1>
                </div>
                <div className="home-desc">
                    <p>A Full-Stack Developer who is also passionate about arts. A few year ago i decided to a career in tech, so here i am! <br/> I like to be a lifelong learner, so I participate in communities that focus on supporting the technology environment, organizing events, and guiding people as they start their careers in the tech industry. </p>
                    </div>
            </div>
            <div className="profile-picture" >
                <img className="portada" src="../assets/img/perfil-def.png"/>
            </div>
        </div>
    )
}

export default Hello;