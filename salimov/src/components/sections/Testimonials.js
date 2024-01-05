const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Exceptional creativity meets flawless execution! Our experience
                with Free Spirit Media transformed our vision into a visual
                masterpiece. Truly a team of magicians! "
              </span>
              <span className="person">Abdul Kareem </span>
              <span className="job">Quachi</span>
            </p>
            <img
              src="assets/testimonials/testimonial-1.jpg"
              alt=""
              style={{ height: "118px" }}
            />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Working with Free Spirit Media was a game-changer for our
                brand. They brought our story to life with cinematic brilliance,
                leaving a lasting impact on our audience. "
              </span>
              <span className="person">Shaji AK</span>
              <span className="job">myG</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
