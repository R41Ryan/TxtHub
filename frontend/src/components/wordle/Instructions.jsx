import React from 'react';
import './Instructions.scss';

function Instructions(){

    return(
        <div className = 'instructions'>

            <h1 className='instr'>How to play</h1>
            <hr/>
            
            <p>Guess the wordle in 6 tries.</p>
            <p>Each guess must be a valid 5 letter word. Hit enter to submit guess</p>

            <p>After each guess the tiles will change colour to indicate how close your guess is to the answer. </p>
            <hr/>

            <img src='../../images/green.png' alt='green-example'/>
            <p>Green tiles mean the letter is correct and in the corect spot. </p>
            <img src='../../images/yello.png' alt='yellow-example'/>
            <p>Yellow tiles mean theletter is present in the word but in a different location. </p>
            <img src='../../images/grey.png' alt='grey-example'/>
            <p>Grey tiles mean the letter is not in the word.</p>

            
        </div>
    )
}

export default Instructions;