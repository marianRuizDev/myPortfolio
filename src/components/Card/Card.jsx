import card from "./card.css";
import app from "../../commons/MyProjects/webs.json"


function Card() {
    const { projects }  = app;
    console.log(projects)

    const list = projects.map((project) => {
        return (
            <article className="cards">
                <header className="header-card">
                    <img className="image-card"
                    src={project.image}
                    alt={project.alt}
                    />
                </header>
                <footer className="footer-card">
                    <div className="category-card">
                       <span>{project.technology}</span>
                    </div>
                    <div className="text-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="profile-card">
                        <div className="img-profile-card">
                        <img src="../assets/img/pexels-evie-shaffer-2395249.jpg" alt="Mariangel Ruiz" />
                        </div>
                        <div className="text-profile-card">
                            <span>Mariangel Ruiz</span>
                            <span>2022</span>
                        </div>
                    </div>
                </footer>
            </article>
        );
    });

    return (
        <div className="card-ward">
            <article className="cards">
                <header className="header-card">
                    <img className="image-card"
                    src="../assets/img/La-pluma-home.png"
                    alt="flores"
                    />
                </header>
                <footer className="footer-card">
                    <div className="category-card">
                       <span>Categoría</span>
                    </div>
                    <div className="text-card">
                        <h3>hhhh</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta dolorum quidem ipsum, sunt veniam ratione totam nihil deserunt corporis illum? Quod deleniti ipsum corrupti repellendus delectus, consequuntur quaerat beatae!m</p>
                    </div>
                    <div className="profile-card">
                        <div className="img-profile-card">
                        <img src="../assets/img/pexels-evie-shaffer-2395249.jpg" alt="Mariangel Ruiz" />
                        </div>
                        <div className="text-profile-card">
                            <span>Mariangel Ruiz</span>
                            <span>2022</span>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    )
}

export default Card;