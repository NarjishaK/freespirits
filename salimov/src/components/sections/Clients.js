import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/MYG.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/spanio.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/pranavam.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/quachi.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/buyology.png"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/kz logo copy.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/unicap.png"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/zamoria.png"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/bigj.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/club.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="assets/logos/cmv's.jpg"
                alt="client"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
