import React, {Component} from 'react';
import './App.css';
class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.updateInput = this.updateInput.bind(this);
        this.start = this.start.bind(this);
    }

    updateInput (e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });

        switch(name) {
            case "firstName":
                if(!/^[A-Z][a-z]*$/.test(value)) {
                    document.getElementsByName("firstName")[0].style.borderColor = "red";
                }
                else {
                    document.getElementsByName("firstName")[0].style.borderColor = "initial";
                }
                break;
            case "lastName":
                if(!/^[A-Z][a-z]*$/.test(value)) {
                    document.getElementsByName("lastName")[0].style.borderColor = "red";
                }
                else {
                    document.getElementsByName("lastName")[0].style.borderColor = "initial";
                }
                break;
            case "email":
                if(!/^[-_\w.]+@[a-z]+\.[a-z]{2,4}$/.test(value)) {
                    document.getElementsByName("email")[0].style.borderColor = "red";
                }
                else {
                    document.getElementsByName("email")[0].style.borderColor = "initial";
                }
                break;
            case "password":
                if(!/^[a-zA-Z0-9_!@#$%^&*-]{8,32}$/.test(value)) {
                    document.getElementsByName("password")[0].style.borderColor = "red";
                }
                else {
                    document.getElementsByName("password")[0].style.borderColor = "initial";
                }
        }
    }

    start() {
        const children = [...document.getElementsByTagName("input")];
        console.log(children);
        if(children.every((item) => {
            console.log(item.style.borderColor !== "red");
            return item.style.borderColor !== "red";
        }))
        this.showMessage();
    }

    showMessage() {
        const message = document.createElement("div");
        message.style.backgroundColor = "pink";
        message.style.width = "400px";
        message.style.height = "200px";
        message.style.position = "absolute";
        message.style.borderRadius = "30px";
        message.style.boxShadow = "4px 4px 20px rgba(0,0,0,0.5)";
        message.onclick = () => {document.getElementsByClassName('App')[0].removeChild(message)};
        const text = document.createElement("p");
        text.style.cursor = "default";
        text.style.fontSize = "21px";
        text.style.padding = "0px 5px";
        text.textContent = "Вам должно было прийти сообщение на e-mail, но оно не придет, так как мы не делали этой функции ;)";
        const button = document.createElement("button");
        button.style.width = "100px";
        button.style.height = "50px";
        button.style.borderRadius = "10px";
        button.innerText = "OK";
        button.style.outline = "none";
        message.appendChild(text);
        message.appendChild(button);
        document.getElementsByClassName("App")[0].appendChild(message);
    }

    render() {
        return (
            <div className="App">
                <div className={"main"}>
                    <div className={"container"}>
                        <label>First name</label>
                        <input name={"firstName"} onChange={this.updateInput}/>
                    </div>
                    <div className={"container"}>
                        <label>Last name</label>
                        <input name={"lastName"} onChange={this.updateInput}/>
                    </div>
                    <div className={"container"}>
                        <label>Email address</label>
                        <input name={"email"} onChange={this.updateInput}/>
                    </div>
                    <div className={"container"}>
                        <label>Create password</label>
                        <input name={"password"} type={"password"} onChange={this.updateInput}/>
                    </div>
                    <button className={"btn_register"} onClick={this.start}>Register</button>
                </div>
            </div>
        );
    }
}

export default App;
