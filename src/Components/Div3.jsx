import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'

const ColumnImages = ({ src1, alt1, src2, alt2 }) => {
  return (
    <div className="column2">
      <div>
        <img
          className="col2Img"
          id="col2Img1"
          src={src1}
          alt={alt1}
        />
      </div>
      <div>
        <img className="col2Img" src={src2} alt={alt2} />
      </div>
    </div>
  );
};

const Div3 = () => {
  return (
    <>
<div id='plan' className="page3">
  <div className="line-container">
    <div className="horizontal-line1" />
    <div className="diamond" />
  </div>
  <div className="pageHeading">
    HAPPY <span style={{ color: "#fc3e59" }}>COUPLE</span>
  </div>
  <div className="page3Text">
    Lorem Ipsum, you need to be sure there isn't anything embarrassinghidden
    <br />
    in the middle of text.
    <br />
  </div>
  <div className="pictures">
    <div className="textColumn">
      <img className="img1" src="images/img1.png" alt="Your Image" />
      <div className="overlay" />
      <div className="textOverlay">
        <pre className="jony-jonali">JONY AND JONILI</pre>
        <hr />
        <p className="text-on-img">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <br />
        <br />
        <button className="readMore">Read More</button>
      </div>
    </div>
    <ColumnImages
        src1="images/img2.png"
        alt1="Your Image"
        src2="images/img3.jpeg"
        alt2="Your Image"
      />
    <div>
      <img className="img1" src="images/img4.jpg" alt="Your Image" />
    </div>
  </div>
  <button className="seeMore">See More</button>
</div>

    </>
  )
}

export default Div3
