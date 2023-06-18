import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
import PriceTableElements from "../../components/PriceTableElements/PriceTableElements";

//Core
import { serviceList } from "./core/serviceList";

//Style
import "./PricesStyle.scss";

const Prices = () => {
  return (
    <CustomPageBlock
      id={"prices"}
      title={"Цены"}
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="prices">
        <div className="prices-table-block">
          {serviceList.map((el, index) => {
            return (
              <PriceTableElements
                name={el.name}
                unity={el.unity}
                price={el.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </CustomPageBlock>
  );
};

export default Prices;
