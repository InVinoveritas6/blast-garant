//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
import ExamplesCard from "../../components/ExamplesCard/ExamplesCard";
import { examples } from "./core/examplesInfo";

//Style
import "./ExamplesPageStyle.scss";

const ExamplesPage = () => {
  return (
    <CustomPageBlock id={"examples"} title={"Примеры работ"}>
      <div className="examples">
        <div className="examples-block">
          {examples.map((el, index) => {
            return (
              <ExamplesCard
                img={el.img}
                workName={el.workName}
                detailName={el.detailName}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </CustomPageBlock>
  );
};

export default ExamplesPage;
