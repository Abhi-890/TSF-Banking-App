import React from "react";
import "./HeroSection.css";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  redTop,
  headline,
  description,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section lightBg" : "home__hero-section"
        }
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className={redTop ? "redTop" : "top-line"}>{topLine}</div>
                <h1 className={lightText ? "heading light" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
