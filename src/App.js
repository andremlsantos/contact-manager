import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <div className="container">
                    <Contact
                        name="Andre Santos"
                        email="andremlsantos@gmail.com"
                        phone="555-555-5555"
                    />
                    <Contact
                        name="Mr Erik"
                        email="mrerik@gmail.com"
                        phone="111-111-1111"
                    />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;
