import React, { Component } from 'react';
import "./reset.css";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="mainContainer">
            <div className="header">
            <div className="filter">
            </div>
            </div>
            <div className="contentContainer">
            <div className="profileContainer">
            <div className="profilePicture">
            <div className="profile-filter">
            <p className="profile-name">Владислав Чернюк</p>
        </div>
        </div>
        <div className="shortDescription">
            <div className="description-container">
            <div className="description-element">
            <h2 className="el-name">
            <img alt="phone" src={require("./assets/img/cellphone-basic.png")}/>
        Телефон
        </h2>
        <p className="text-info">+380660224039</p>
            </div>
            <div className="description-element">
            <h2 className="el-name">
            <img alt="email" src={require("./assets/img/email.png")}/>
        Эл. Почта
        </h2>
        <p className="text-info">vlad26v03@gmail.com</p>
        </div>
        <div className="references">
            <a target="_blank" className="reference" href="https://www.facebook.com/kofful">
            <img alt="facebook" className="reference-img" src={require("./assets/img/facebook.png")}/>
            </a>
            <a target="_blank" className="reference" href="https://twitter.com/Vlad26_05">
            <img alt="twitter" className="reference" src={require("./assets/img/twitter.png")}/>
            </a>
            <a target="_blank" className="reference" href="https://vk.com/chernyukvlad">
            <img alt="vk" className="reference" src={require("./assets/img/vk.png")}/>
            </a>
            </div>
            </div>
            </div>
            </div>
            <div className="descriptionContainer">
            <div className="projects">
            </div>
            </div>
            <div className="skillsContainer">
            <div className="skills-container">
            <div className="skill-container">
            <div className="skill_header">
            <p className="skill-header_text">C#</p>
        </div>
        <div className="images">
            <img alt="visual-studio" className="technology-image" src={require("./assets/img/visual-studio.jpg")}/>
            <img alt="c-sharp" className="technology-image" src={require("./assets/img/c-sharp.png")}/>
            <img alt="ado-net" className="technology-image" src={require("./assets/img/ado-net.jpg")}/>
            <img alt="net-framework" className="technology-image" src={require("./assets/img/net-framework.jpg")}/>
            </div>
            </div>
            <div className="skill-container">
            <div className="skill_header">
            <p className="skill-header_text" id="programming_db">Программирование БД</p>
        </div>
        <div className="images">
            <img alt="mssql" className="technology-image" src={require("./assets/img/mssql.png")}/>
            <img alt="uml" className="technology-image" src={require("./assets/img/uml.png")}/>
            </div>
            </div>
            <div className="skill-container">
            <div className="skill_header">
            <p className="skill-header_text">Web</p>
            </div>
            <div className="images">
            <img alt="html" className="technology-image" src={require("./assets/img/html.png")}/>
            <img alt="css" className="technology-image" src={require("./assets/img/css.png")}/>
            <img alt="js" className="technology-image" src={require("./assets/img/js.png")}/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
    }
}

export default App;
