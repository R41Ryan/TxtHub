import './Wordle.scss';
import React from 'react';
import {FaBackspace} from 'react-icons/fa';
function Wordle(){

    var words = new Array(30).fill(0);
       
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

            <div id='board-container'>
                <div id='board'></div>
            </div>
            
            <div id="keyboard">

                <div className='row'>
                    <button data-key='q'>q</button>
                    <button data-key='w'>w</button>
                    <button data-key='e'>e</button>
                    <button data-key='r'>r</button>
                    <button data-key='t'>t</button>
                    <button data-key='y'>y</button>
                    <button data-key='u'>u</button>
                    <button data-key='i'>i</button>
                    <button data-key='o'>o</button>
                    <button data-key='p'>p</button>

                </div>
                
                <div className='row'>
                    <button data-key='a'>a</button>
                    <button data-key='s'>s</button>
                    <button data-key='d'>d</button>
                    <button data-key='f'>f</button>
                    <button data-key='g'>g</button>
                    <button data-key='h'>h</button>
                    <button data-key='j'>j</button>
                    <button data-key='k'>k</button>
                    <button data-key='l'>l</button>
                    
                </div>
                
                <div className='row'>
                    <button data-key='↵' className='one-and-a-half'>enter</button>
                    <button data-key='z'>z</button>
                    <button data-key='x'>x</button>
                    <button data-key='c'>c</button>
                    <button data-key='v'>v</button>
                    <button data-key='b'>b</button>
                    <button data-key='n'>n</button>
                    <button data-key='m'>m</button>
                    <button data-key='bs' className='one-and-a-half'><FaBackspace size={20} /></button>
                </div>
            </div>
                

        </div>
    )
}

export default Wordle;