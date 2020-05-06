// AWS Amplify resources
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

// Configure the Amplify components in the app
Amplify.configure(awsExports);

// Amazon Cognito hosted UI to provide sign-up and sign-in functionality
import {withAuthenticator} from 'aws-amplify-react';

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
export default withAuthenticator(App);