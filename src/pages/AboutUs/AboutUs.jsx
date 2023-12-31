import { useState, useEffect } from "react";

//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
import WorkInfoBlock from "../../components/WorkInfoBlock/WorkInfoBlock";

//Core
import { blocks, aboutUsText } from "./core/workInfoBlockContent";

//Style
import "./AboutUsStyle.scss";

const AboutUs = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, []);

  return (
    <CustomPageBlock id="aboutUs" title={"О нас"} style={screenWidth <= 414 ? {height: "100vh"} :{ height: "calc(100vh - 50px)" }}>
      <div className="about-us-block">
        <div className="about-us-text-block">
            <div className="about-us-text">
          {aboutUsText.text}
          <div className="last-line">{aboutUsText.lastLine} <span></span></div>
            </div>
        </div>
        <div className="about-us-info-block">
          <div className={screenWidth <= 768 ? "about-us-blocks-mobile" :"about-us-blocks"}>
            {blocks.map((el, index) => {
              return (
                <WorkInfoBlock img={el.img} title={el.title} text={el.text} key={index} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </CustomPageBlock>
  );
};

export default AboutUs;
