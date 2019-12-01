import React from 'react';
import './App.scss';
import { Loging } from './login/Login';
import { Appointment } from './appointment/Appointment';
import { Information } from './information/Information';

// import 'antd-mobile/dist/antd-mobile.css';
import Button from 'antd-mobile/lib/button';
import 'antd-mobile/lib/button/style/css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Loging />
          <Appointment />
          <Information />
          <Button>Ant Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
