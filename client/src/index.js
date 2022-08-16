import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserState from "./state/UserState";
import FilterState from "./state/FilterState";


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        user: new UserState(),
        filter: new FilterState()
    }}>
        <App />
    </Context.Provider>
  </React.StrictMode>
);
