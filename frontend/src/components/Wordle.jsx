import './Wordle.scss';
import React from 'react';
import {FaBackspace} from 'react-icons/fa';
function Wordle(){

    var words = new Array(30).fill(0);
       

   
    return(
        <div>
            <h1 className="game-name">Wordle</h1>

            {/*Real version creates game tiles and game rows to import and create this */}
            <ul className="geusses">
            {words.map(function(words){
                        return <li className='letter'>
                            
                            
                        </li>;
                           
                    })}
            </ul>
            
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
                    <button data-key='←' className='one-and-a-half'><FaBackspace size={20} /></button>
                </div>
            </div>
                

        </div>
    )
}

export default Wordle;