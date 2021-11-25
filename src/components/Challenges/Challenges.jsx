import React from 'react';
import data from '../../api/data';
import Challenge from '../Challenge/Challenge';
import './Challenges.css';
import { useState } from 'react';
import Search from '../Search/Search';







const Challenges = () => {

    const [searchTitle, setSearchTitle] = useState('')
    const [cards, setCards] = useState(data)

    const handeleChange = (e) => {
        if (e.target.value) {
            const results = cards.filter((item) => {
                if (item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
                    return true;
                } else {
                    return false
                };
            })
            setCards(results)
        } else { setCards(data) }
        setSearchTitle(e.target.value)


    }

    return (

        <>
            <Search handeleChange={handeleChange} searchTitle={searchTitle}/>
            < div className="container-cards" >

                {
                    cards.map(item => <Challenge item={item} key={item.id} />)
                }
            </div >
        </>

    );
}

export default Challenges;