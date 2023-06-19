import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";

import { Navigation, Pagination, Autoplay } from "swiper";

//Core
import { reviews } from "./core/reviews";
//Style
import "./ReviewsPageStyle.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ReviewsPage = () => {
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
      setScreenWidth(window.outerWidth);
    }, []);
  return (
    <CustomPageBlock id={"reviews"} title={"Отзывы"}>
      <div className="reviews">
        <Swiper
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
  
        modules={[Autoplay]}
        grabCursor={true}
        >
          {reviews.map((el, index) => {
            return (
              <SwiperSlide className="test3">
                <div className="review-block" key={index}>
                  <div className="review-text">{el.text}</div>
                  <div className="review-stars">
                    <img src="/images/Reviews/GoldStars.svg" alt="img" />
                    <img src="/images/Reviews/GoldStars.svg" alt="img" />
                    <img src="/images/Reviews/GoldStars.svg" alt="img" />
                    <img src="/images/Reviews/GoldStars.svg" alt="img" />
                    <img src={el.stars === 1 ? "/images/Reviews/GoldStars.svg" : "/images/Reviews/Star.svg"} alt="img" />
                  </div>
                  <div className="review-name">{el.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </CustomPageBlock>
  );
};

export default ReviewsPage;
