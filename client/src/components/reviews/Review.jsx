import "./review.css"

// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Review() {
    const plantData = [
        {
            plantName:"Emma Bauso",
            plantImgUrl:"./emma-bauso.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
    ]
  return (
      <section className="hero_carousel maxContainer">
          <div className="carousel">
                <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}

                    breakpoints={{
                        992:{
                            width: 992,
                            slidesPerView: 3,
                        },
                        768:{
                            width: 768,
                            slidesPerView: 2,
                        },
                        576:{
                            width: 576,
                            slidesPerView: 1,
                        },
                    }} 
                >     

                    <SwiperSlide>
                        <BestSellingSeeMoe/>
                    </SwiperSlide>
                    {plantData.map((e,i)=>
                        <SwiperSlide key={i}>
                            <HeroCarouselItem {...e} />
                        </SwiperSlide>
                    )}
                </Swiper>
          </div>
      </section>
  );
}

function BestSellingSeeMoe() {
    return (
        <div className="hero_carousel_item">
            <h5>Best Selling Plant</h5>
            <p>Easiest way to healthy life by buying your favorite plants</p>
            <button>See more <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
    );
}
function HeroCarouselItem(prop) {
    const {plantImgUrl,plantName,plantPrice}=prop
    return (
        <div className="hero_carousel_item">
            <img src={plantImgUrl} alt="" />
            <div>
                <h6>{plantName}</h6>
                <span>{plantPrice}</span>
            </div>
        </div>
    );
}
