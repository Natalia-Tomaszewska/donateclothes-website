import React from 'react';
import "./../../scss/ThreeColumns.scss";


const ThreeColumns = () => {
    return (
        <section className="threeColumns-section">
            <div className="threeColumns-container">
                <div className="col1">
                    <div className="col1-number">10</div>
                    <h3 className="col1-heading">
                        ODDANYCH WORKÓW
                    </h3>
                    <p className="col1-paragraph">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.<br/> Et facilis laboriosam
                        maiores.
                    </p>
                </div>
                <div className="col2">
                    <div className="col2-number">5</div>
                    <h3 className="col2-heading">
                        WSPARTYCH ORGANIZACJI
                    </h3>
                    <p className="col2-paragraph">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.<br/> Et facilis laboriosam
                        maiores.
                    </p>
                </div>
                <div className="col3">
                    <div className="col3-number">7</div>
                    <h3 className="col3-heading">
                        ZORGANIZOWANYCH ZBIÓREK
                    </h3>
                    <p className="col3-paragraph">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.<br/> Et facilis laboriosam
                        maiores.
                    </p>
                </div>

            </div>
        </section>
    )
};

export default ThreeColumns;