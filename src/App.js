import React from 'react';
import './App.css';

import ImageCard from './components/imageCard/imageCard';
import Timer from './components/timer/timer';
import Board from './components/board/board'

/* function App() {

  return (

    <div className="App">
      <ImageCard

      />
    </div>
  );
} */

class App extends React.Component {

  render() {
    return (

      <div className="App">
     
        <Timer/>
          <Board/>
      </div>
    )
  }
}

export default App;
