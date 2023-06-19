import { useState, useEffect } from "react";

//Style
import "./WorkInfoBlockStyle.scss";

const WorkInfoBlock = ({ img, title, text, index }) => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, []);

  return (
    <>
      <div className="block-body">
        {screenWidth <= 768 ? (
            <div className="block-body-tablet">
                <img src={img} alt="img" />
                <div className="tablet-block-card">
                    <div style={{height: "50%"}}></div>
                    <div className="tablet-block-card-text-block">
                      <div className="tablet-block-card-text-title">{title}</div>
                      <div className="tablet-block-card-text">{text}</div>
                    </div>
                </div>
             </div>
                  ) : (
          <>
            {" "}
            <div>
              <img src={img} alt="img" />
            </div>
            <div
              className="block-text"
              style={{ borderRight: index === 3 ? "1px solid #fff" : "none" }}
            >
              <div className="block-text-title">
                {title}
                <span></span>
              </div>
              <div className="block-text-content">{text}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WorkInfoBlock;
