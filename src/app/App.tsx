import React from 'react';
import './App.scss';
// import { Header } from './header/Header';
// import { Center } from './center/Center';
import { Footer } from './footer/Footer';
// import { Appointment } from './appointment/Appointment';
// import { Information } from './information/Information';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export enum RouterPars {
  Main = 'main',
  Info = 'info'
}

export const App: React.FC = () => {
  return (
    // <div className="App">
    //   <Router>
    //     <Header />
    //     <Center>
    //       <Switch>
    //         <Route path={`/${RouterPars.Main}`}>
    //           <Appointment />
    //         </Route>
    //         <Route path={`/${RouterPars.Info}`}>
    //           <Information />
    //         </Route>
    //       </Switch>
    //     </Center>
    //     <Footer />
    //     <hr />
    //     <ul>
    //       <li>
    //         <Link to={`/${RouterPars.Main}`}>Main</Link>
    //       </li>
    //       <li>
    //         <Link to={`/${RouterPars.Info}`}>Info</Link>
    //       </li>
    //     </ul>
    //   </Router> */}
    //   {/* <Header />
    //   <Footer />
    // </div>
    <Footer />
  );
};
