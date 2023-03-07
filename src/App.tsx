import React from 'react';

import { Routes  } from 'react-router-dom';

import { Route, RouteProps } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './LandingPage';
import { SignIn } from './Auth';

import "firebase/auth";
import "firebase/firestore";

import  auth from './firebase';
import SwipingPage from './SwipingPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/swiping" element={<SwipingPage />} />
      <Route path="/auth" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
};

export default App;
