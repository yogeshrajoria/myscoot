import './index.scss';
import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    toggle = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    render(){
        return(<header className="header">
            <div class="row nav-top">
                <img src="/images/logo.png" alt="logo" className="logo"/>
                <div className="menu" onClick={this.toggle}>
                    <svg version="1.1" className="menu-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24.75px" height="24.75px" viewBox="0 0 24.75 24.75">
                        <g>
                            <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                                c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                                c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
                        </g>
                    </svg>
                </div>
            </div>
            <ul className={"nav " + this.state.active}>
                <li><a href="/">Start Hosting</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Sign Up</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </header>

    )}
}
export default Header;