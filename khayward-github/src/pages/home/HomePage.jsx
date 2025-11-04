import React from "react";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
      <h2>Welcome to my FIRST WEBPAGE!</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-page">About</Link></li>
        <li><Link to="/support-page">Support</Link></li>
      </ul>
    </div>
    )
}