import React, { Component } from 'react';
import './LandingPage.scss';
import Window from "../../Components/Window/Window";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Window/>
            </div>
        );
    }
}

export default LandingPage;