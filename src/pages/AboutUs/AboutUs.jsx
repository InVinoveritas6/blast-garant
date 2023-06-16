//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";

//Style
import "./AboutUsStyle.scss";

const AboutUs = () => {
  return (
    <CustomPageBlock id="aboutUs" title={"О нас"}>
      <div className="about-us-block">
        <div className="about-us-text-block">
            <div className="about-us-text">
            Мы - компания, которая предоставляет услуги по пескоструйной обработке
          различных поверхностей. Наша команда состоит из
          высококвалифицированных специалистов с многолетним опытом работы. Мы
          используем современное оборудование и только качественные материалы.
          Наша цель - предоставить нашим клиентам качественные услуги по
          доступным ценам. Мы гарантируем высокое качество выполненных работ и
          индивидуальный подход к каждому клиенту. 
          <div className="last-line">Одно из наших главных преимуществ -выезд на объект к клиенту <span></span></div>
            </div>
        </div>
        <div className="about-us-info-block">blocks</div>
      </div>
    </CustomPageBlock>
  );
};

export default AboutUs;
