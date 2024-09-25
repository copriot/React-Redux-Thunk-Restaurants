import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { RiEBike2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const RestCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="border rounded-lg shadow overflow-hidden hover:bg-gray-300 cursor-pointer hover:shadow-lg my-5"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={data.photo}
          className="w-full h-full object-cover"
          alt="Description of image"
        />
      </div>

      <div className="flex gap-2 items-center justify-between p-3">
        <h2 className="text-xl">{data.name}</h2>
        <p className="flex gap-2 items-center">
          {data.rating}
          <IoIosStar className="text-rose-700" />
        </p>
      </div>

      <p className="text-sm m-2 text-gray-500">
        <span>{data.minPrice} TL minimum</span>
      </p>

      <div className="flex">
        <p className="flex items-center gap-2 text-sm font-semibold m-2">
          <FaRegClock className="text-green-600 text-lg" />
          <span>{data.estimatedDelivery} dak.</span>
        </p>
        {data.isDeliveryFree && (
          <p className="flex items-center gap-2 text-sm font-semibold m-2">
            <RiEBike2Fill className="text-orange-600 text-lg" />
            <span>{data.estimatedDelivery} dak.</span>
          </p>
        )}
      </div>
    </Link>
  );
};

export default RestCard;
