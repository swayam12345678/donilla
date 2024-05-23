import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'

const Card = ({ imgSrc, altText, title, text, textClass }) => {
  return (
    <div className="card">
      <div className="imgContainer">
        <div className="rectangle" />
        <div className="card_img">
          <img src={imgSrc} alt={altText} />
        </div>
      </div>
      <div className="card_info">
        <h4 style={{ color: "#fc3e59" }}>{title}</h4>
        <p className={textClass}>{text}</p>
        <br />
        <img className="double-quote" src="images/doublequotes.png" alt="double-quote" />
      </div>
    </div>
  );
};

const Div4 = ({ imageUrl, title, description }) => {
  return (

<>
  <div className="page4">
    <div className="p4col1">
      <div className="P4heading">
        Our <span className="story">Story</span>
      </div>
      <div className="p4text">
        <p className="p4text-inside">
          words which don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internetwords
          which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet
        </p>
      </div>
      <div className="p4Button">
        <button className="p4Button-text">SEE MORE</button>
      </div>
    </div>
    <div className="p4col2">
      <center>
        <img src="images/p4img.png" alt="" />
      </center>
    </div>
  </div>
  {/* PAGE 5 */}
  <div className="Page5">
    <div className="Page5Heading">
      <p>
        ARE YOU <span>ATTENDING</span>
      </p>
    </div>
    <div className="Page5Content">
      <div className="col1">
        <form action="" className="p5form">
          <input type="text" className="p5input" />
          <br />
          <input type="text" className="p5input" />
          <br />
          <input type="text" className="p5input" />
          <br />
          <input type="text" className="p5input" />
          <br />
          <button className="p5input" id="p5button">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="col2">
        <img src="images/p5imgright.png" alt="" />
      </div>
    </div>
    <div className="map">
      <img src="images/map.png" alt="" />
    </div>
  </div>
  {/* PAGE 6 */}
  <div id='blog' className="page6">
    <div className="line-container">
      <hr className="horizontal-line1" />
      <div className="diamond" />
    </div>
    <div className="pageHeading">
      WHAT SAYS <span style={{ color: "#fc3e59" }}>COUPLE</span>
    </div>
    <div className="testimonials">
      <div className="leftArrow">
        <img className="fas fa-arrow-left" src="images/arrow-left.png" />
      </div>
      <Card
        imgSrc="images/testemonials1.png"
        altText="user-image"
        title="Ron and Libpna"
        text="have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in"
        textClass="testemonials1-text"
      />
      <Card
        imgSrc="images/testemonials2.png"
        altText="user-image"
        title="Ron and Libpna"
        text="have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in"
        textClass="testemonials2-text"
      />
      <div className="rightArrow">
        <img className="fas fa-arrow-right" src="images/arrow-right.png" />
      </div>
    </div>
  </div>
</>


  );
};

export default Div4;
