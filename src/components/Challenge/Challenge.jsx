import React from 'react';
import './Challenge.css';





const Challenge = ({ item }) => {
    return (
        <>
            <div className="container-card">
                <div className="card">
                    <h2 className="subtitle">{item.title}</h2>
                    <a className="link-image" href={item.url} target="blank" >
                    <img className="image" src={item.image} alt="gift"  /></a>
                    <p className="description-project">{item.description}</p>
                </div>
            </div>

        </>







    );
}

export default Challenge;