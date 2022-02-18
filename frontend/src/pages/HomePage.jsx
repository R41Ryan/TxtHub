import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import './HomePage.scss';


function HomePage(){


    let navigate = useNavigate();

    function wordleHandler(){

        navigate('/wordle');
        
        
    }
    return(
        <div className='games-page'>
            <Layout/>
            
            <div className='game-container'>
                <ul className='games-list'>
                    <li className='game'>
                        <div className='card' onClick={wordleHandler}>
                            <h1>Play Wordle!</h1>
                        </div>
                    </li>
                </ul>
            </div>
            
                
            
        </div>
    )
}

export default HomePage;