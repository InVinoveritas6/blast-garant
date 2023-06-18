import React from "react";

//Style
import './WorkInfoBlockStyle.scss'

const WorkInfoBlock = ({img, title, text, index}) => {

  return (
    <>
      <div className="block-body">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="block-text" style={{ borderRight: index === 3 ? "1px solid #fff" : "none"}}>
          <div className="block-text-title">
            {title}<span></span>
          </div>
          <div className="block-text-content">
            {text}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInfoBlock;
