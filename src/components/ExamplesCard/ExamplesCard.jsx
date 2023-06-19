//Style
import "./ExamplesCardStyle.scss";

const ExamplesCard = ({img, workName, detailName}) => {
  return (
    <>
      <div className="examples-card">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="examples-card-text-block">
          <div className="example-card-text-title">{workName}</div>
          <div className="examples-card-text">{detailName}</div>
        </div>
      </div>
    </>
  );
};

export default ExamplesCard;
