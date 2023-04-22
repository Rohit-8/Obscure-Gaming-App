import React from "react";
import Footer from "./Footer";

function About({setLoginUser}) {
  return (
    <div>
      <div className="box">
      <img src="images/coding.webp" className="about-img" alt="AboutImage"/>
      <br />
      <p>
        I am a dynamic driven professional with a track record of establishing and maintaining connections, leading teams through the whole project lifecycle, and guiding people to success.
        <br /><br /> I am also a motivated coder who works with enthusiasm.
        <br /> A pre-final year student at the Institute of Engineering and Technology, Lucknow, majoring in computer science and engineering.
        <br /> As a Web developer and Competitive Programmer, I enjoy investigating and experimenting with algorithms.
        <br /><br /> On Codeforces and Codechef, I actively engage in a coding competition. I'm ready to launch my career with a company that will expose me to many cultures so I can expand my knowledge and abilities.</p>
      </div>
      <Footer setLoginUser={setLoginUser}/>
    </div>
    
  );
}

export default About;