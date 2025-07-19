import { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    { src: "/image/clothes.png", alt: "Second slide" },
    { src: "/image/acc.png", alt: "Third slide" },
    { src: "/image/shoe.jpg", alt: "Fourth slide" },
    { src: "/image/care.jpeg", alt: "Fifth slide" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isHovered, slides.length]);

  const handleMouseEnter = () => {
    setIsHovered(true); // Start auto-slide on mouse enter
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Stop auto-slide on mouse leave
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex-wrap "
              style={{ height: "400px" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 flex items-center justify-center"
        aria-label="Previous Slide"
      >
        &#10094; {/* Left Arrow: HTML Entity */}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 flex items-center justify-center"
        aria-label="Next Slide"
      >
        &#10095; {/* Right Arrow: HTML Entity */}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
