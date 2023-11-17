import React, { useEffect , useRef} from "react";
import "./Navbar.css";
import  {gsap,Power3} from 'gsap'

export default function Navbar() {
 let logoani = useRef(null)
 let textani = useRef(null)
 useEffect(()=> {
  gsap.to(
    logoani,
    1,
    {
      opacity:1,
      y:-20,
      ease: Power3.easeOut,
      delay: 0.3
    }
  )
 },[])
 useEffect(()=> {
  gsap.to(
    textani,
    1,
    {
      opacity:1,
      y:-20,
      ease: Power3.easeOut,
      delay: 0.3
    }
  )
 },[])

  return (
    <div className="nav">
      <div className="logo" ref={el => {logoani=el}}>
        <div className="con"></div>
      </div>
      <div className="pages">
        <ul className="lin1" ref={el => {textani=el}}>
          <li>Alumni</li>
          <li>Testimonials</li>
          <li>Domains</li>
        </ul>
      </div>
    </div>
  );
}
