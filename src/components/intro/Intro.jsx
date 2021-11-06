import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "DELINEANTE DE ARQUITECTURA",
        "TATUADOR",
        "DISEÑADOR",
        "ESTUDIANTE DE ARTES",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div className="imgContainer">
          <img src="assets/camilo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> </h2>
          <div className="title">
            <h1>CAMILO CEBALLOS</h1>
          </div>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
