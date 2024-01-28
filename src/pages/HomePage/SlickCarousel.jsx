import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SlickCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="">
      <Carousel responsive={responsive}>
        <div className="card relative w-[250px] z-10">
          <div className="absolute w-[39px] rounded-full p-1 bg-blue-600 z-10">
            <img
              className="rounded-full"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>
          <p className="absolute z-10 mb-10">Sport Header</p>
          <div className="h-[250px] rounded-lg absolute">
            <img
              className=" img-card object-fill rounded-lg h-[250px]"
              src="/src/assets/406860438_1048481983054231_6833658113738926574_n.jpg"
            />
          </div>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>{" "}
          <h2>Hoàng Quốc Toàn</h2>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>{" "}
          <h2>Hoàng Quốc Toàn</h2>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>{" "}
          <h2>Hoàng Quốc Toàn</h2>
        </div>
        <div className="main-carousel">
          <div className="img-carousel">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>{" "}
          <h2>Hoàng Quốc Toàn</h2>
        </div>
        <div className="main-carousel card">
          <div className="img-carousel card">
            <img
              className="img-ca"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>{" "}
          <div className="text-carousel">TOAN</div>
        </div>
      </Carousel>
    </div>
  );
}
