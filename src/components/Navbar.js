import React, { useState } from "react";

function Navbar(props) {
    function changeVar(v1, v2) {
        v1 += 2;
        v2 += 2;
        return {v1, v2};
    }
    const [name, setName] = useState('');
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                { changeVar(props.v1, props.v2) ? 'Pricing' : 'Dead'}
                            </a>
                        </li>
                        {/* <Abc/> */}
                        {abc()}
                </ul>
                </div>
            </div>
        </nav>
    );
}

const abc = () => {
    return ( <li className="nav-item">
    <a
        className="nav-link disabled"
        href="#"
        tabIndex="-1"
        aria-disabled="true"
    >
        Disabled
    </a>
</li>)
}

export default Navbar;
