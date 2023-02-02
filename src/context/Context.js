import React, { createContext, useState } from 'react';
const Context = createContext();
const Provider = (props) => {
    
    return (
        <Context.Provider value=''>
            {props.children}
        </Context.Provider>
    );
};

export { Context, Provider };