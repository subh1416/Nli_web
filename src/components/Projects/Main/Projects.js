import React, { useEffect, useRef } from "react";
import "./Projects.css";
import Header from "../../Header/Header";

export default function Projects() {
  return (
    <div className="projects">
      <Header title="Projects" />
      <div className="initcont">
        <div className="stack_cards">
          <ul id="cards">
            <li class="card" id="card1">
              <div class="card-body">
                <div className="textvhd">
                  <div className="head4bj">
                    <h1 className="khfojh">Project 1</h1>
                  </div>
                  <div className="louoj56">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque aliquam ut debitis voluptatibus natus eaque quis
                      exercitationem sit, hic blanditiis iusto odit corporis
                      quidem minus voluptatum consequuntur saepe sunt culpa iure
                      nam tempora doloremque pariatur aliquid autem. Sit
                      tempora, commodi quidem a quo quaerat id?
                    </p>
                  </div>
                </div>
                <div className="imgjhj">
                  <img
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li class="card" id="card2">
              <div class="card-body">
                <div className="textvhd">
                  <div className="head4bj">
                    <h1 className="khfojh">Project 2</h1>
                  </div>
                  <div className="louoj56">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque aliquam ut debitis voluptatibus natus eaque quis
                      exercitationem sit, hic blanditiis iusto odit corporis
                      quidem minus voluptatum consequuntur saepe sunt culpa iure
                      nam tempora doloremque pariatur aliquid autem. Sit
                      tempora, commodi quidem a quo quaerat id?
                    </p>
                  </div>
                </div>
                <div className="imgjhj">
                  <img
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li class="card" id="card3">
              <div class="card-body">
                <div className="textvhd">
                  <div className="head4bj">
                    <h1 className="khfojh">Project 3</h1>
                  </div>
                  <div className="louoj56">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque aliquam ut debitis voluptatibus natus eaque quis
                      exercitationem sit, hic blanditiis iusto odit corporis
                      quidem minus voluptatum consequuntur saepe sunt culpa iure
                      nam tempora doloremque pariatur aliquid autem. Sit
                      tempora, commodi quidem a quo quaerat id?
                    </p>
                  </div>
                </div>
                <div className="imgjhj">
                  <img
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt=""
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
