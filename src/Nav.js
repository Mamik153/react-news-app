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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <a className="navbar-brand" href>News App</a>
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
                    </ul>
                </div>
                {/*<div className="nav-center">
                     <div className="nav-header">
                        <Link to="/">
                            <img alt="logo"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            {this.state.isOpen ? <FaTimes className="nav-icon" /> : <FaBars className="nav-icon"/>}
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-link show-nav" : "nav-link"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tech">Technology</Link>
                        </li>
                    </ul>
                </div>*/}
            </nav>
        )
    }
    
}

export default Nav;