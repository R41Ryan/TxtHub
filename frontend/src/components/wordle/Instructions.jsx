import React from 'react';

import './Instructions.scss';
import green from '../../images/green.png';
import yellow from '../../images/yellow.png';
import grey from '../../images/grey.png';
function Instructions(props){

    return(
        <div className = 'instructions'>

            <div className='instr-top'>
                <h1 className='instr'>How to play</h1>

                <h3 onClick={props.handler}>{props.button}</h3>
            </div>

            
            <hr/>
            
            <div className = 'body'>
                <p>Guess the wordle in 6 tries.</p>
                <p>Each guess must be a valid 5 letter word. Hit enter to submit guess</p>

                <p>After each guess the tiles will change colour to indicate how close your guess is to the answer. </p>
                <hr/>

                <img src= {green} alt='green-example'/>
                <p>Green tiles mean the letter is correct and in the corect spot. </p>
                <img src={yellow} alt='yellow-example'/>
                <p>Yellow tiles mean theletter is present in the word but in a different location. </p>
                <img src= {grey} alt='grey-example'/>
                <p>Grey tiles mean the letter is not in the word.</p>
                <hr/>
            </div>
            
            
        </div>
    )
}

export default Instructions;