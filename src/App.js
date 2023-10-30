import "./App.css";
import Navbar from "./components/navbar/Navbar";
import astro from "./assets/images/astr.gif";
import nli from "./assets/images/nl2.png";
import React, { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";
import Achievements from "./components/Achievements/Achievements";
import { motion } from "framer-motion"



function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  let App = useRef(null);

  let t1 = new gsap.timeline();

  useEffect(()=>{
    t1
    .to(App,2,{css:{visibility:"visible"}})
  })
  


  

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setX(e.clientX - left);
    setY(e.clientY - top);
  };

  return (
    <div className="App" ref={el => {App=el}}>
      <Navbar />
      <div className="sec1">
        <motion.div className="p2" 
        transition={{
          ease: "linear",
          duration: 2,
          delay: 0.2
        }}
          variants={
            {
              hidden:{opacity:0,x:90},
              visible:{opacity:1,x:0},
            }
          }
          initial="hidden"
        animate="visible"
        >
          <div
            className="boxcard"
            onMouseMove={handleMouseMove}
            style={{
              "--x": x + "px",
              "--y": y + "px",
            }}
          >
            <div className="b1">
              <p className="t1">Welcome to</p>
              <span className="t2">New Leap Initiative</span>
            <hr className="h12r"></hr>
            </div>

            <div className="b2">
              <span className="t3" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis ipsum odit dolorum ducimus qui nihil deleniti hic commodi, minima at adipisci, reiciendis minus dolore eligendi explicabo sunt illum ex mollitia quis consectetur modi. Deleniti adipisci consectetur eligendi ipsum ad.
              </span>
            </div>
          </div>
        </motion.div>

        <div className="p1">
          <div className="circle1">
            <img src={nli} alt="" srcset="" />
          </div>
          <div className="circle">
            <img src={astro} alt="" srcset="" />
          </div>
        </div>
      </div>
      
      <Achievements/>
    </div>
  );
}

export default App;
