import React, { Fragment } from 'react';
import './Styled.css';
const Menu = () => {
    return (
        <Fragment>
            <header>
                <div className="collapse bg-dark" id="navbarHeader">


                       <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contacto</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://twitter.com/"        target="_blank" className="text-white">Síguelo en Twitter</a></li>
                            <li><a href="https://es-la.facebook.com/" target="_blank" className="text-white">Me gusta en Facebook</a></li>
                        </ul>

                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">


                    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </header>
        </Fragment>

    );
}

export default Menu;