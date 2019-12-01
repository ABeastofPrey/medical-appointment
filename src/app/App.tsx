import React from 'react';
import './App.scss';
import { Loging } from './login/Login';
import { Appointment } from './appointment/Appointment';
import { Information } from './information/Information';
import { Header } from './header/Header';
import { Center } from './center/Center';
import { Footer } from './footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Center />
      <Footer />
    </div>
  );
}

export default App;
