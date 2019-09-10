import React from 'react';
import io from 'socket.io-client'

export const CTX = React.createContext();

const reducer = (state, action) => {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECIEVE_MESSGAE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from: from,
                        msg: msg
                    }
                ]
            }
        default:
            return state;
    }
}

const initState= {
    general: [
        {from: 'Dan', msg: 'hello'}, 
        {from: 'James', msg: 'helllo'},
        {from: 'Daniel', msg: 'hello'}
    ],
    topic2: [
        {from: 'Jamie', msg: 'hello'}, 
        {from: 'Jordan', msg: 'helllo'},
        {from: 'Darin', msg: 'hello'}
    ]
}

let socket; 

const sendChatAction = (value) =>{
    socket.emit('chat message', value);
}


const Store = (props) => {
    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg) {
            dispatch({type: 'RECIEVE_MESSGAE', payload: msg});
        })
    }
    const user = "Daniel" + Math.random(100).toFixed(2);
    return (
    <CTX.Provider value={{allChats, sendChatAction, user}}>
        {props.children}
    </CTX.Provider>
    );
}

export default Store;