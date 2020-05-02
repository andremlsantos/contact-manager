import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
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
        );
    }
}

export default App;
