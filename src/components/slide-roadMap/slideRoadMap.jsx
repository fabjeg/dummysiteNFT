import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slideRoadMap.css";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

export function SlideRoadMap() {
  const valueCards = [
    {
      title: "PHASE 1",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 2",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 3",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 4",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 5",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 6",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const swiperRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const updateActiveIndex = () => {
      if (swiperRef.current) {
        const centerIndex = Math.floor(slidesPerView / 2);
        const realIndex = swiperRef.current.realIndex % valueCards.length;
        const centeredIndex = (realIndex + centerIndex) % valueCards.length;
        setActiveIndex(centeredIndex);
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", updateActiveIndex);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", updateActiveIndex);
      }
    };
  }, [valueCards.length, slidesPerView]);

  return (
    <div className="swiper-container">
      <div className="progress-bar-container">
        <div className="progress-bar-fill"></div>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={-150}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        grabCursor={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {valueCards.map((value, idx) => (
          <SwiperSlide key={idx}>
            <div className={`log-svg ${activeIndex === idx ? "active" : ""}`}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill={activeIndex === idx ? "#21E786" : "#808080"}
                  fillOpacity={activeIndex === idx ? "0.2" : "0.2"}
                />
                <circle
                  cx="30"
                  cy="30"
                  r="15"
                  fill={activeIndex === idx ? "#21E786" : "#808080"}
                />
              </svg>
              <svg width="84%" height="100%" style={{ marginLeft: "42%" }}>
                <path
                  d="M30 170L30 0"
                  stroke={activeIndex === idx ? "#21E786" : "#808080"}
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div className="path-container"></div>
            <div className="cards-about-slide">
              <h5 className="title-h5">{value.title}</h5>
              <ul className="li_txt">
                {value.txt
                  .split(".")
                  .filter(Boolean)
                  .map((sentence, index) => (
                    <li key={index}>{sentence.trim()}.</li>
                  ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
