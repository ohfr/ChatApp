import React from 'react';

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
        {from: 'Dan', msg: 'hello'}, 
        {from: 'James', msg: 'helllo'},
        {from: 'Daniel', msg: 'hello'}
    ]
}


const Store = (props) => {
    const reducerHook = React.useReducer(reducer, initState);
    return (
    <CTX.Provider value={reducerHook}>
        {props.children}
    </CTX.Provider>
    );
}

export default Store;