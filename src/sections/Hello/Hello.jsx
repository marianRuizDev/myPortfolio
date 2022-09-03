import hello from "./hello.css";

function Hello() {
    return (
        <div className="home">
            <div className="intro">
                <div>
                    <h1>Hello</h1>
                    <p>Description</p>
                </div>
            </div>
            <div >
                <img className="portada" src="../assets/img/pexels-gerardo-cejas-5655178.jpg"/>
            </div>
        </div>
    )
}

export default Hello;