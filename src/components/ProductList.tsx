import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-md ring-1 ring-llama text-llama w-max py-2 px-4 text-xs hover:bg-llama hover:text-white">Add to cart</button>
      </Link>
      
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-md ring-1 ring-llama text-llama w-max py-2 px-4 text-xs hover:bg-llama hover:text-white">Add to cart</button>
      </Link>

      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-md ring-1 ring-llama text-llama w-max py-2 px-4 text-xs hover:bg-llama hover:text-white">Add to cart</button>
      </Link>

      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
          <Image
            src="https://placehold.co/600x400/png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-md ring-1 ring-llama text-llama w-max py-2 px-4 text-xs hover:bg-llama hover:text-white">Add to cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
