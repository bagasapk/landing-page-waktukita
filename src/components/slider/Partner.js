import React from "react";
import frame1 from "../../resources/brand/Rectangle 47.png";
import frame2 from "../../resources/brand/our-partner-3 1.png";
import frame3 from "../../resources/brand/our-partner-10.png";
import frame4 from "../../resources/brand/our-partner-5.png";
import frame5 from "../../resources/brand/our-partner-8.png";
import frame6 from "../../resources/brand/Group 64.png";
import frame7 from "../../resources/brand/our-partner-6.png";
import frame8 from "../../resources/brand/our-partner-9.png";
import frame9 from "../../resources/brand/our-partner-2 1.png";

const Partner = () => {
  const [index, setIndex] = React.useState(0);
  const slides = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
  ];

  const timeoutRef = React.useRef(null);
  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 7 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slides.length, index]);
  return (
    <div>
      <div className="pb-4 slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index * 25}%, 0, 0)` }}
          className="p-5 d-none row d-lg-flex flex-nowrap slider"
        >
          {slides.map((src, index) => (
            <div className="col-lg-2">
              <img
                className="img-fluid"
                key={index}
                alt="frame-1"
                src={src}
              ></img>
            </div>
          ))}
        </div>
        <div
          style={{ transform: `translate3d(${-index * 57}%, 0, 0)` }}
          className="px-5 d-none row d-md-flex d-lg-none flex-nowrap slider"
        >
          {slides.map((src, index) => (
            <div className="col-md-3">
              <img
                className="img-fluid"
                key={index}
                alt="frame-1"
                src={src}
              ></img>
            </div>
          ))}
        </div>
        <div
          style={{ transform: `translate3d(${-index * 79.0}%, 0, 0)` }}
          className="px-5 row d-flex d-md-none flex-nowrap slider"
        >
          {slides.map((src, index) => (
            <div className="col-4">
              <img
                className="img-fluid"
                key={index}
                alt="frame-1"
                src={src}
              ></img>
            </div>
          ))}
        </div>
        <div className="d-block">
          {slides.slice(0, 3).map((_, idx) => (
            <div
              key={idx}
              className={`tentang slideshowDots${
                index === idx ? " active" : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
