import React from "react";
import image1 from "./images/1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="first">
        <img src={image1} />
      </div>

      <div className="second">
        <div>
          <h1 style={{ fontSize: "2.5rem" }}> Moustafa Emad </h1>
        </div>
        <div>
          <h2 style={{ fontSize: "1.8rem" }}>Mobile : 01096688747</h2>
        </div>
        <div>
          <a href="https://wa.me/+201096688747" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "64px", margin: "8px" }}
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100004980244806"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "64px", margin: "8px" }}
            />
          </a>
          <a href="https://www.instagram.com/moustafa_3mad99" target="_blank">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ fontSize: "64px", margin: "8px" }}
            />
          </a>
          <a href="https://www.google.com.eg" target="_blank">
            <FontAwesomeIcon
              icon={faSnapchatGhost}
              style={{ fontSize: "64px", margin: "8px" }}
            />
          </a>

          <p style={{ marginTop: "3.4em", fontSize: "1em" }}>
            @ created by Mohamed Dawood
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
