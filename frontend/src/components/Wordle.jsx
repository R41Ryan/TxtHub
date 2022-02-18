import './Wordle.scss';
import React from 'react';
import {FaBackspace, FaGreaterThanEqual} from 'react-icons/fa';
function Wordle(){

    var currentWord = [];
    var guessedWords = [];
    var guessPosition = 0; 
    const answer = "ready";

    let square = document.createElement("div")
       
    function createSquares() {
        const gameBoard = document.getElementById("board");
    
        for (let index = 0; index < 30; index++) {
          square = document.createElement("div");
          
          square.classList.add("square");
          square.classList.add("animate__animated");
          square.setAttribute("id", index);
          gameBoard.appendChild(square);
        }
    }

    function addLetter(a)
    {   
        
        if(currentWord.length > 4){
            return;
        }
        currentWord.push(a);
        const box = document.getElementById(guessPosition);
        box.textContent = a;
        guessPosition++; 

    }

    function removeLetter(){
        if(guessPosition <= guessedWords.length * 5){
            return;
        }
        if (guessPosition > 0){
            guessPosition--;
        }
        let b = '';
        currentWord.pop(); 
        const box = document.getElementById(guessPosition);
        box.textContent = b;
    }

    function addWord(){

        //Make function to check that the word is a real word

        if(currentWord.length < 5){
            //Give an error
            return;
        }
        const map = new Map();
        const duplicates = [];
        var str ="";

        for(let i = 0; i < currentWord.length; i++){
            str+= currentWord[i];
            if(currentWord[i] === answer.charAt(i)){
                if(map.get(currentWord[i]) !== undefined){
                    duplicates.push(currentWord.indexOf(str.charAt(str.length -1)));
                }
                map.set(answer.charAt(i), 'g');
            }else{
                if(map.get(currentWord[i]) === undefined){
                    map.set(currentWord[i], 'x');
                }else{
                    duplicates.push(i);
                }
                
            }
           
        }

        for(let i = 0; i < answer.length; i++){
            if(map.get(answer.charAt(i)) !== undefined && map.get(answer.charAt(i)) !== 'g'){
                map.set(answer.charAt(i), 'y');
            }
        }

        for(let  i =0; i < currentWord.length; i++){
            
            const box = document.getElementById(guessPosition - 5 + i);
            const letter = document.getElementById(currentWord[i]);

            var char = currentWord[i];

            if(map.get(char) === 'g'){
                box.style.backgroundColor = 'lightgreen';
                letter.style.backgroundColor = 'lightgreen';
            }else if(map.get(char) === 'y'){
                box.style.backgroundColor = 'yellow';

                if(letter.style.backgroundColor !== 'lightgreen'){
                    letter.style.backgroundColor = 'yellow';
                }
                
            }else{
                box.style.backgroundColor = 'grey';
                letter.style.backgroundColor = 'grey';
            }
        }
        for(let i = 0; i < duplicates.length; i++){
            const box = document.getElementById(guessPosition - 5 + duplicates[i]);
            

            if(answer.split(currentWord[duplicates[i]]).length-1 > 1){
                console.log('yo')
                if(currentWord[duplicates[i]] === answer.charAt(duplicates[i])){
                    box.style.backgroundColor = 'lightgreen';
                }else{
                    box.style.backgroundColor = 'yellow';
                }
            }else{
                box.style.backgroundColor = 'grey';
            }
            
        }
        guessedWords.push(currentWord);
        currentWord = [];
    }
   
    return(
        <div>
            <h1 className="game-name" onClick={createSquares}>Wordle</h1>

            <div id='board-container'>
                <div id='board'/>
            </div>
            
            <div id="keyboard">

                <div className='row'>
                    <button onClick= { () => addLetter('q') }data-key='q' id='q'>q</button>
                    <button onClick= { () => addLetter('w') }data-key='w' id='w'>w</button>
                    <button onClick= { () => addLetter('e') }data-key='e' id='e'>e</button>
                    <button onClick= { () => addLetter('r') }data-key='r' id='r'>r</button>
                    <button onClick= { () => addLetter('t') }data-key='t' id='t'>t</button>
                    <button onClick= { () => addLetter('y') }data-key='y' id='y'>y</button>
                    <button onClick= { () => addLetter('u') }data-key='u' id='u'>u</button>
                    <button onClick= { () => addLetter('i') }data-key='i' id='i'>i</button>
                    <button onClick= { () => addLetter('o') }data-key='o' id='o'>o</button>
                    <button onClick= { () => addLetter('p') }data-key='p' id='p'>p</button>

                </div>
                
                <div className='row'>
                    <button onClick= { () => addLetter('a') } data-key='a' id='a'>a</button>
                    <button onClick= { () => addLetter('s') } data-key='s' id='s'>s</button>
                    <button onClick= { () => addLetter('d') } data-key='d' id='d'>d</button>
                    <button onClick= { () => addLetter('f') } data-key='f' id='f'>f</button>
                    <button onClick= { () => addLetter('g') } data-key='g' id='g'>g</button>
                    <button onClick= { () => addLetter('h') } data-key='h' id='h'>h</button>
                    <button onClick= { () => addLetter('j') } data-key='j' id='j'>j</button>
                    <button onClick= { () => addLetter('k') } data-key='k' id='k'>k</button>
                    <button onClick= { () => addLetter('l') } data-key='l' id='l'>l</button>
                    
                </div>
                
                <div className='row'>
                    <button onClick= { () => addWord() } data-key='enter' className='one-and-a-half'>enter</button>
                    <button onClick= { () => addLetter('z') } data-key='z' id='z'>z</button>
                    <button onClick= { () => addLetter('x') } data-key='x' id='x'>x</button>
                    <button onClick= { () => addLetter('c') } data-key='c' id='c'>c</button>
                    <button onClick= { () => addLetter('v') } data-key='v' id='v'>v</button>
                    <button onClick= { () => addLetter('b') } data-key='b' id='b'>b</button>
                    <button onClick= { () => addLetter('n') } data-key='n' id='n'>n</button>
                    <button onClick= { () => addLetter('m') } data-key='m' id='m'>m</button>
                    <button onClick= { () => removeLetter() } data-key='backspace' className='one-and-a-half'><FaBackspace size={20} /></button>
                </div>
            </div>
                

        </div>
    )
}

export default Wordle;