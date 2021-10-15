import React from 'react'
import Home from '../pages/Home';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <Home />
        </AppContext.Provider>
    );
}

export default App;