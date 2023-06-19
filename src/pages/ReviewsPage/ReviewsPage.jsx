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
  return (
    <CustomPageBlock id={"reviews"} title={"Отзывы"}>
      <div className="reviews">
        <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={-1050}
        loop={true}
        className="mySwiper"
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
                    <img src="/images/Reviews/Star.svg" alt="img" />
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
