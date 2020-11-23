import React from 'react';
import "./../../scss/SimpleSteps.scss";
import {Route} from "react-router-dom";

const SimpleSteps = () => {
    return (
        <section className="simpleSteps-section">
            <div className="simpleSteps-container">
                <div className="simpleSteps-container-heading">
                    <h1 className="simpleSteps-heading">
Wystarczą 4 proste kroki
                    </h1>
                    <div className="simpleSteps-decoration">

                    </div>
                </div>
                <div className="simpleSteps-container-icons">
                    <div className="pickClothing">
                        <h6 className="icons-heading">
                            Wybierz rzeczy
                        </h6>
                        <p className="icons-paragraph">
                            ubrania, zabawki,<br/> sprzęt i inne
                        </p>
                    </div>
                    <div className="packClothing">
                        <h6 className="icons-heading">
                            Spakuj je
                        </h6>
                        <p className="icons-paragraph">
                            skorzystaj z<br/> worków na śmieci
                        </p>
                    </div>
                    <div className="decide">
                        <h6 className="icons-heading">
                            Zdecyduj komu<br/>chcesz pomóc
                        </h6>
                        <p className="icons-paragraph">
                            wybierz zaufane<br/>miejsce
                        </p>
                    </div>
                    <div className="courier">
                        <h6 className="icons-heading">
                            Zamów kuriera
                        </h6>
                        <p className="icons-paragraph">
                            kurier przyjedzie<br/>w dogodnym terminie
                        </p>
                    </div>
                </div>
                <div className="simpleSteps-container-button">
                    <Route render={({ history}) => (
                        <button className="simpleSteps-button" onClick={() => { history.push('/logowanie') }}>
                            Oddaj rzeczy
                        </button>
                    )} />
                </div>
            </div>
        </section>
    )
};

export default SimpleSteps;