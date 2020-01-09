import './index.scss';
import React from 'react';

class Footer extends React.Component{
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
        return(
        <footer className="footer">
            <h3>Get exclusive invites with a verified MyScoot account</h3>
            <div>
                <button>Sign Up</button>
                <button>Log in</button>
            </div>
        </footer>

    )}
}
export default Footer;