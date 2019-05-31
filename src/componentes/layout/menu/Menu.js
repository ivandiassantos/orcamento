import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Orçamento</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services.html">Como Utilizar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}