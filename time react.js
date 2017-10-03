
import React from 'react';
function Tick() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    
  }
  export default Tick;
  
 // setInterva

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
function Time(){
ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(Time,1000);
registerServiceWorker();