import { Swiper, SwiperSlide } from "swiper/react";
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

//Core
import { reviews } from "./core/reviews";
//Style
import "./ReviewsPageStyle.scss";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ReviewsPage = () => {
  return (
    <CustomPageBlock id={"reviews"} title={"Отзывы"}>
      <div className="reviews">
        <Swiper
          slidesPerView={3} slidesPerColumn={2} spaceBetween={30}
          loop={true}
        >
            {reviews.map((el, index) => {
              return (
                <SwiperSlide>
                    <div className="review-block" key={index}>
                      <div className="review-text">{el.text}</div>
                      <div className="review-stars">
                        <img src="/images/Reviews/GoldStars.svg" />
                        <img src="/images/Reviews/GoldStars.svg" />
                        <img src="/images/Reviews/GoldStars.svg" />
                        <img src="/images/Reviews/GoldStars.svg" />
                        <img src="/images/Reviews/Star.svg" />
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
