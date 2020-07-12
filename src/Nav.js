import React from "react";
import {Link} from "react-router-dom"

class Nav extends React.Component{
    state={
        isOpen: false
    }

    handleToggle=()=>{
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top" style={{ display:'flex', justifyContent: 'flex-between' }}>
                <Link className="navbar-brand" to="/">
                    News App
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tech">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wsj">Wall Street Journal</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}

export default Nav;