import React, { useLayoutEffect, useRef } from "react";
import "./Achievements.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const component = useRef();
  const slider = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="bv2" ref={component}>

      <div className="be1">
        <span>Achievement</span>
      </div>

      <div className="bf1" ref={slider}>
        <div className="panel red">
          <div className="ach1">
            <div className="chi1">
              <div className="imgconi">
                <img
                  src="https://preview.redd.it/8fgs49trdm761.jpg?width=640&crop=smart&auto=webp&s=e6d7e8b3e5372d8888f36092f8ac1804d8e7cf65"
                  alt=""
                />
              </div>
            </div>
            <div className="bhav1">
              <div className="tex1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  quidem illo natus eaque voluptatibus sequi impedit error nulla
                  asperiores accusantium! Explicabo omnis soluta vel dicta.
                  Debitis facere iste laborum. Nesciunt!
                </span>
              </div>
              <div className="tex2">
                <span>Touch the Moon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="panel orange">
          <div className="ach1">
            <div className="chi1">
              <div className="imgconi">
                <img
                  src="https://preview.redd.it/8fgs49trdm761.jpg?width=640&crop=smart&auto=webp&s=e6d7e8b3e5372d8888f36092f8ac1804d8e7cf65"
                  alt=""
                />
              </div>
            </div>
            <div className="bhav1">
              <div className="tex1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  quidem illo natus eaque voluptatibus sequi impedit error nulla
                  asperiores accusantium! Explicabo omnis soluta vel dicta.
                  Debitis facere iste laborum. Nesciunt!
                </span>
              </div>
              <div className="tex2">
                <span>Touch the Moon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="panel purple">
          <div className="ach1">
            <div className="chi1">
              <div className="imgconi">
                <img
                  src="https://preview.redd.it/8fgs49trdm761.jpg?width=640&crop=smart&auto=webp&s=e6d7e8b3e5372d8888f36092f8ac1804d8e7cf65"
                  alt=""
                />
              </div>
            </div>
            <div className="bhav1">
              <div className="tex1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  quidem illo natus eaque voluptatibus sequi impedit error nulla
                  asperiores accusantium! Explicabo omnis soluta vel dicta.
                  Debitis facere iste laborum. Nesciunt!
                </span>
              </div>
              <div className="tex2">
                <span>Touch the Moon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
