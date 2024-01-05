import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
              <img src="assets/blog/new.png" alt="" />
              </span>
              <div className="content">
                <span className="category">Standard - 8000</span>
                <span>1 Video</span>
                <p>
                  Pre-Production
                  <br />
                  Post-Production
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2024</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
              <img src="assets/blog/new.png" alt="" />
              </span>
              <div className="content">
                <span className="category">Creative - 20,000</span>
                <span>3 Video</span>
                <p>
                  Pre-Production
                  <br />
                  Post-Production
                  <br />
                  Reach
                  <br />
                  Inclueds Shorts
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2024</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/new.png" alt="" />
              </span>
              <div className="content">
                <span className="category">premium - 40,000</span>
                <span>5 video</span>
                <p>
                  Pre-Production
                  <br />
                  Post-Production
                  <br />
                  Campaign Strategy
                  <br />
                  Reach
                  <br />
                  Lead Generation
                  <br />
                  Shorts Videos
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2024</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
