import React, { useState } from "react";

const Testimoni = () => {
  const [index2, setIndex2] = useState(0);
  const tests = ["John Doe", "John Cena"];
  const timeoutRef2 = React.useRef(null);
  const delay = 4000;

  React.useEffect(() => {
    resetTimeout2();
    timeoutRef2.current = setTimeout(
      () =>
        setIndex2((prevIndex) =>
          prevIndex === tests.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout2();
    };
  }, [tests.length, index2]);

  function resetTimeout2() {
    if (timeoutRef2.current) {
      clearTimeout(timeoutRef2.current);
    }
  }

  return (
    <div>
      <div className="d-none d-md-block slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}
          className="px-5 slider position-relative"
        >
          <div className="d-flex">
            {tests.map((name, index) => (
              <div className="col-12 col-md-12 d-flex flex-md-row flex-column justify-content-md-center p-5 mx-5">
                <div className="col-12 col-md-6">
                  <img
                    key={index}
                    className="img-fluid"
                    alt="picture1"
                    src="https://i.ibb.co/592WbhN/Rectangle-72.png"
                  ></img>
                </div>
                <div className="text-left testimoni col-md-8 col-lg-6 text-center text-lg-left">
                  <h2 className="titleForm">{name}</h2>
                  <span>Designer</span>
                  <p className="pt-2 text-lg-left pt-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis accumsan eget habitant diam enim quam. Tincidunt
                    tellus tellus in morbi ut condimentum vivamus varius. Tortor
                    orci blandit lacus, sed purus tincidunt eget neque sapien.
                    Mi elit tortor amet enim, purus molestie erat. Id
                    scelerisque elit, rutrum duis aliquet placerat tincidunt.
                    Vitae quis sagittis est dignissim nibh commodo.”
                  </p>
                  <div className="starColor">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-md-none d-block slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}
          className="slider position-relative"
        >
          <div className="d-flex">
            {tests.map((name, index) => (
              <div className="col-12">
                <div className="col-12 col-md-6">
                  <img
                    key={index}
                    className="img-fluid"
                    alt="picture1"
                    src="https://i.ibb.co/592WbhN/Rectangle-72.png"
                  ></img>
                </div>
                <div className="text-left testimoni col-md-8 col-lg-6 text-center text-lg-left">
                  <h2 className="pt-3 pt-md-0 titleForm">{name}</h2>
                  <span>Designer</span>
                  <p className="pt-2 text-lg-left pt-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis accumsan eget habitant diam enim quam. Tincidunt
                    tellus tellus in morbi ut condimentum vivamus varius. Tortor
                    orci blandit lacus, sed purus tincidunt eget neque sapien.
                    Mi elit tortor amet enim, purus molestie erat. Id
                    scelerisque elit, rutrum duis aliquet placerat tincidunt.
                    Vitae quis sagittis est dignissim nibh commodo.”
                  </p>
                  <div className="starColor">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
