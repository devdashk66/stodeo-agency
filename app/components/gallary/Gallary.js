"use client";
import React, { useState } from "react";

// An array of image URLs
const images = [
  "https://picsum.photos/600/400",
  "https://picsum.photos/601/400",
  "https://picsum.photos/602/400",
  "https://picsum.photos/603/400",
  "https://picsum.photos/604/400",
  "https://picsum.photos/605/400",
  "https://picsum.photos/606/400",
  "https://picsum.photos/607/400",
  "https://picsum.photos/600/401",
  "https://picsum.photos/601/402",
  "https://picsum.photos/602/403",
  "https://picsum.photos/603/404",
  "https://picsum.photos/604/405",
  "https://picsum.photos/605/406",
  "https://picsum.photos/606/407",
  "https://picsum.photos/607/408",
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to open a selected image in full view
  const openFullView = (index) => {
    setSelectedImageIndex(index);
  };

  // Function to close the full view
  const closeFullView = () => {
    setSelectedImageIndex(null);
  };

  // Function to navigate to the next or previous image
  const navigateImage = (direction) => {
    if (selectedImageIndex !== null) {
      if (direction === "next") {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (direction === "prev") {
        setSelectedImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded">
        {images.map((image, index) => (
          <div
            data-aos="fade-right"
            key={index}
            className="cursor-pointer relative"
            onClick={() => openFullView(index)}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full rounded"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative">
            <img
              src={images[selectedImageIndex]}
              alt={`Full Image ${selectedImageIndex}`}
              className="w-90vw"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeFullView}
            >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-2 text-white text-2xl transform -translate-y-1/2"
              onClick={() => navigateImage("prev")}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-2 text-white text-2xl transform -translate-y-1/2"
              onClick={() => navigateImage("next")}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
