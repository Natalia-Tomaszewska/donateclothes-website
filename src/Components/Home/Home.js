import React from 'react';
import "./../../scss/Home.scss";
import {Route} from 'react-router-dom';



const Home = () => {
    return (
 <section className="home-section">
<div className="home-container">
    <div className="photo-container">

    </div>
    <div className="heading-container">
        <h1 className="home-heading">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
        <div className="home-button-container">
            <Route render={({ history}) => (
                <button className="home-button" onClick={() => { history.push('/logowanie') }}>
                    ODDAJ RZECZY
                </button>
            )} />
            <Route render={({ history}) => (
                <button className="home-button" onClick={() => { history.push('/logowanie') }}>
                    ZORGANIZUJ ZBIÓRKĘ
                </button>
            )} />
        </div>
    </div>
</div>
 </section>
    )
};


export default Home;