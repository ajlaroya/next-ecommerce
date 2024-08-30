"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     src: "https://placehold.co/600x400/png",
//     alt: "",
//     priority: true,
//   },
//   {
//     id: 2,
//     src: "https://placehold.co/600x400/png",
//     alt: "",
//     priority: false,
//   },
//   {
//     id: 3,
//     src: "https://placehold.co/600x400/png",
//     alt: "",
//     priority: false,
//   },
//   {
//     id: 4,
//     src: "https://placehold.co/600x400/png",
//     alt: "",
//     priority: false,
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
          alt={items.name}
          priority={true}
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
