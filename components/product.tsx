import React from "react";
import Image from "next/image";

interface Productdata {
  id?: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const Product = (props: Productdata) => {
  return (
    <div className="">
      <div className=" flex flex-col gap-3 justify-center items-center h-[600px]  rounded-xl py-2 w-[330px] sm:w-[300px] shadow-xl bg-white">
        <div className="h-[60%] flex justify-center ">
          <Image src={props.image} alt="image" width={300} height={200} />
        </div>
        <div className=" flex gap-3 p-4  flex-col">
          <h3 className="line-clamp-1 overflow-hidden text-2xl text-black font-semibold">
            {props.title}
          </h3>
          <p className="line-clamp-2 text-black overflow-hidden">
            {props.description}
          </p>

          <p className="text-2xl text-black font-bold">${props.price}</p>
          <div>
            <Image src={"stars.svg"} alt="star" width={65} height={13} />
            <span className=" text-lg text-gray-700">
              Rating: {props.rating.rate}
            </span>
            <span className="ml-2 text-lg  text-gray-700">
              ({props.rating.count} Reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
