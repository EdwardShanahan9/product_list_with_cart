import React from "react";

const OderConfirmedItem = ({ image, name, price, quantity }) => {
  return (
    <div>
      <li className="flex items-center justify-between pb-4 border-b border-rose100 mb-8">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-md mr-4"
            src={image.thumbnail}
            alt="Thumbnail Image"
          />

          <div className="flex flex-col">
            <h2 className="mb-1 text-sm text-rose500">{name}</h2>

            <div className="flex">
              <h2 className="mb-1 text-sm font-primaryMedium text-primary mr-2">
                {quantity}
              </h2>
              <h3 className="text-rose500 text-sm font-primaryMedium">
                @ $5.50
              </h3>
            </div>
          </div>
        </div>

        <h3 className="text-rose900 font-primaryMedium text-base">
          ${quantity * price}
        </h3>
      </li>
    </div>
  );
};

export default OderConfirmedItem;
