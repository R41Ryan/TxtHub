import './Wordle.scss';
import React from 'react';
import {FaBackspace} from 'react-icons/fa';
function Wordle(){

    var words = new Array(30).fill(0);
    var guessPosition = 0; 

    function addLetter(a)
    {
        guessPosition++; 
        words[guessPosition] = a; 
        alert(words[guessPosition] +  ' guessPosition: ' + guessPosition);
    }
       
    function createSquares() {
        const gameBoard = document.getElementById("board");
    
        for (let index = 0; index < 30; index++) {
          let square = document.createElement("div");
          square.classList.add("square");
          square.classList.add("animate__animated");
          square.setAttribute("id", index + 1);
          gameBoard.appendChild(square);
        }
    }
   
    return(
        <div>
            <h1 className="game-name" onClick={createSquares}>Wordle</h1>

            {/*Real version creates game tiles and game rows to import and create this */}
            <ul className="guesses">
            {words.map(function(words){
                        return <li className='letter'>
                            
                            
                        </li>;
                           
                    })}
            </ul>
            
            <div id="keyboard">

                <div className='row'>
                    <button onClick= { () => addLetter('q') } data-key='q'>q</button>
                    <button onClick= { () => addLetter('w') }data-key='w'>w</button>
                    <button onClick= { () => addLetter('e') }data-key='e'>e</button>
                    <button onClick= { () => addLetter('r') }data-key='r'>r</button>
                    <button onClick= { () => addLetter('t') }data-key='t'>t</button>
                    <button onClick= { () => addLetter('y') }data-key='y'>y</button>
                    <button onClick= { () => addLetter('u') }data-key='u'>u</button>
                    <button onClick= { () => addLetter('i') }data-key='i'>i</button>
                    <button onClick= { () => addLetter('o') }data-key='o'>o</button>
                    <button onClick= { () => addLetter('p') }data-key='p'>p</button>

                </div>
                
                <div className='row'>
                    <button onClick= { () => addLetter('a') } data-key='a'>a</button>
                    <button onClick= { () => addLetter('s') } data-key='s'>s</button>
                    <button onClick= { () => addLetter('d') } data-key='d'>d</button>
                    <button onClick= { () => addLetter('f') } data-key='f'>f</button>
                    <button onClick= { () => addLetter('g') } data-key='g'>g</button>
                    <button onClick= { () => addLetter('h') } data-key='h'>h</button>
                    <button onClick= { () => addLetter('j') } data-key='j'>j</button>
                    <button onClick= { () => addLetter('k') } data-key='k'>k</button>
                    <button onClick= { () => addLetter('l') } data-key='l'>l</button>
                    
                </div>
                
                <div className='row'>
                    <button onClick= { () => addLetter('enter') } data-key='↵' className='one-and-a-half'>enter</button>
                    <button onClick= { () => addLetter('z') } data-key='z'>z</button>
                    <button onClick= { () => addLetter('x') } data-key='x'>x</button>
                    <button onClick= { () => addLetter('c') } data-key='c'>c</button>
                    <button onClick= { () => addLetter('v') } data-key='v'>v</button>
                    <button onClick= { () => addLetter('b') } data-key='b'>b</button>
                    <button onClick= { () => addLetter('n') } data-key='n'>n</button>
                    <button onClick= { () => addLetter('m') } data-key='m'>m</button>
                    <button onClick= { () => addLetter('backspace') } data-key='←' className='one-and-a-half'><FaBackspace size={20} /></button>
                </div>
            </div>
                

        </div>
    )
}

export default Wordle;