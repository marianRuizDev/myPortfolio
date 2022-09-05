import projects from "./projects.css";
import card from "../../components/Card/card.css";

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="container">
                <div className="card-ward">
                    <article className="cards">
                        <header className="header-card">
                            <img className="image-card"
                            src="../assets/img/La-pluma-def.jpg"
                            alt="Book E-commerce"
                            />
                        </header>
                        <footer className="footer-card">
                            <div className="text-card">
                                <h3>E-commerce La Pluma</h3>
                                <p>A book-themed E-commerce, where i worked in front with CSS and also did
                                    some configurations with Redux.
                                    Technology stack: JWT, React-Router, Redux, Sequelize, Material UI, Express, Bcrypt, CSS</p>
                            </div>
                        </footer>
                    </article>
                </div>
                <div className="card-ward">
                    <article className="cards">
                        <header className="header-card">
                            <img className="image-card"
                            src="../assets/img/Bumeran.jpg"
                            alt="Web"
                            />
                        </header>
                        <footer className="footer-card">
                            <div className="text-card">
                                <h3>Bumeran Selecta</h3>
                                <p> A job search page that offers support for businesses that need specific profiles;
                                Technology stack: React, Redux-Persist, Sequelize, Express, Passport, Bcrypt, Bootstrap,
                                MySQL, Material UI.</p>
                            </div>
                        </footer>
                    </article>
                </div>        
            </div>
        </div>
    )
}

export default Projects;