import React from 'react';

import './Message.scss';


function Message(props){

    return(
        <div className='message'>
            <h2>{props.title}</h2>
            <p>{props.instr}</p>
            
            <div className='redo'>

                <h3>{props.again}</h3>
                
                <h3 onClick={props.handler}>{props.button} </h3>
            </div>
                
            
        </div>
    );
}

export default Message;