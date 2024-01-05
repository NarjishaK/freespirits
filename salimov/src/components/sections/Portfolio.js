import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Our Initiative
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/FmCLtAG_Nsw?si=KRQvZlELbiUFQ8Bw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            {/* <h4>Youtube Project</h4> */}
            <div>
              <ul>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-file-lines" /> Project : */}
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Quachi</span>
                </li>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-user" /> Client : */}
                  </span>
                  {/* <span>Quachi</span> */}
                </li>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-hourglass" /> Duration : */}
                  </span>
                  {/* <span>8 months</span> */}
                </li>
                <li>
                  <span>
                    {/* <i className="fa-solid fa-code-branch" /> Frameworks : */}
                  </span>
                  {/* <span>After Effects</span> */}
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Vijua8vhen0?si=ITKRbgJTt1PEeO58"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            {/* <h4>Youtube Project</h4> */}
            <div>
              <ul>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-file-lines" /> Project : */}
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Quachi</span>
                </li>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-user" /> Client : */}
                  </span>
                  {/* <span>Quachi</span> */}
                </li>
                <li>
                  <span>
                    {/* <i className="fa-regular fa-hourglass" /> Duration : */}
                  </span>
                  {/* <span>8 months</span> */}
                </li>
                <li>
                  <span>
                    {/* <i className="fa-solid fa-code-branch" /> Frameworks : */}
                  </span>
                  {/* <span>After Effects</span> */}
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
