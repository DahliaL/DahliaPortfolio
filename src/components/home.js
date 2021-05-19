import React from "react";
import Navbar from "./Navbar"
import Welcome from "./welcome"
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Welcome/>

            <Particles params={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 800,
              }
            },
          }, 
          color: {
              value:'#63b1a3',
          }
        }}
            />

        </div>
    );
};

export default Home;