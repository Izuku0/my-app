
import React from "react";
import {Route,Routes} from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Signin from './components/sign-up-form/sign-up-form.component';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signin/>}/>

      </Routes>
    </div>
    
  );
}

export default App;
