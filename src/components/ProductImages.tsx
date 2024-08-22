"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://placehold.co/600x400/png",
    alt: "",
    priority: true,
  },
  {
    id: 2,
    src: "https://placehold.co/600x400/png",
    alt: "",
    priority: false,
  },
  {
    id: 3,
    src: "https://placehold.co/600x400/png",
    alt: "",
    priority: false,
  },
  {
    id: 4,
    src: "https://placehold.co/600x400/png",
    alt: "",
    priority: false,
  },
];

const ProductImages = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[activeImage].src}
          fill 
          sizes="50vw"
          className="object-cover rounded-md"
          alt=""
          priority={true}
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={image.id}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image.src}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
              alt=""
              priority={image.priority}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
