

import { Route, RouteProps } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Stylr</h1>
      <p>Swipe right on clothes you love, left on those you don't.</p>
      <p>Sign up or sign in to get started.</p>
      <Link to="/auth">
        <button>Sign In</button>
      </Link>
    </div>
  );
};


export default LandingPage;
