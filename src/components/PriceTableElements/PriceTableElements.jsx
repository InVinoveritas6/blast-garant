import React from "react";

//Style
import "./PriceTableElementsStyle.scss";

const PriceTableElements = ({ name, unity, price }) => {
  return (
    <>
      <div className="prices-table-element">
        <div className="service-name">{name}</div>
        <div className="unity">{unity} </div>
        <div className="price">{price} </div>
      </div>
    </>
  );
};

export default PriceTableElements;
