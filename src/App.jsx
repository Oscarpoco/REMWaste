import { useState } from 'react';

//IMPORTING STYLING
import './styles/App.css';

// OUTSIDE COMPONENTS
import SkipScreen from './components/screens/SkipsWrapper';

function App() {

  return (
    <div className='App'>

    {/* RENDER THE SCREEN */}
    <SkipScreen/>

    </div>
  )
}

// MAKING MY FUNCTION AVAILABLE FOR IMPORTS
export default App;
