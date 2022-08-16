import {BrowserRouter} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import './App.css';
import './fonts/stylesheet.css'

function App() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

      return (
          <BrowserRouter>
              <div className="app">
                  <Header />
                  <div className="content-wrapper">
                      <Sidebar />
                      <div className="content">
                          <AppRouter />
                      </div>
                  </div>
              </div>
          </BrowserRouter>
      );
}

export default App;
