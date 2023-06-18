//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
import WorkInfoBlock from "../../components/WorkInfoBlock/WorkInfoBlock";

//Core
import { blocks, aboutUsText } from "./core/workInfoBlockContent";

//Style
import "./AboutUsStyle.scss";

const AboutUs = () => {
  return (
    <CustomPageBlock id="aboutUs" title={"О нас"}>
      <div className="about-us-block">
        <div className="about-us-text-block">
            <div className="about-us-text">
          {aboutUsText.text}
          <div className="last-line">{aboutUsText.lastLine} <span></span></div>
            </div>
        </div>
        <div className="about-us-info-block">
          <div className="about-us-blocks">
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
