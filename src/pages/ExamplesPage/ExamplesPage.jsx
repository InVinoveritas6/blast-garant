//Components
import { useEffect, useState } from "react";
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
import ExamplesCard from "../../components/ExamplesCard/ExamplesCard";
import { examples } from "./core/examplesInfo";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

//Style
import "./ExamplesPageStyle.scss";

const ExamplesPage = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, []);

  return (
    <CustomPageBlock id={"examples"} title={"Примеры работ"}>
      <div className="examples">
        <div className="examples-block">
          {screenWidth <= 414 ? (
            <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            navigation={true}
            spaceBetween={30}
            modules={[Grid, Navigation]}
            className="custom-grid-swiper"
                >
              {examples.map((el, index) => {
                return (
                  <SwiperSlide className="custom-grid">
                    <ExamplesCard
                      img={el.img}
                      workName={el.workName}
                      detailName={el.detailName}
                      key={index}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            examples.map((el, index) => {
              return (
                <ExamplesCard
                  img={el.img}
                  workName={el.workName}
                  detailName={el.detailName}
                  key={index}
                />
              );
            })
          )}
        </div>
      </div>
    </CustomPageBlock>
  );
};

export default ExamplesPage;
