import { useEffect } from "react";
import ConfirmIcon from "../../assets/images/icon-order-confirmed.svg";
import ThumbnailImage from "../../assets/images/image-tiramisu-thumbnail.jpg";

const OrderConfirmed = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full md:w-[688px] lg:w-[592px] p-10 px-6 rounded-lg shadow-lg">
        <img className="mb-6" src={ConfirmIcon} alt="Tick Icon" />

        <h1 className="text-4xl font-primaryBold mb-2">Order Confirmed</h1>

        <p className="text-rose500 text-base mb-8">
          We hope you enjoy your food!
        </p>

        <div className="p-6 bg-rose50 mb-8 rounded-lg">
          <ul className="mb-12">
            <li className="flex items-center justify-between pb-4 border-b border-rose100 mb-8">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-md mr-4"
                  src={ThumbnailImage}
                  alt="Thumbnail Image"
                />

                <div className="flex flex-col">
                  <h2 className="mb-1 text-sm text-rose500">
                    Classic Tiramisu
                  </h2>

                  <div className="flex">
                    <h2 className="mb-1 text-sm font-primaryMedium text-primary mr-2">
                      1x
                    </h2>
                    <h3 className="text-rose500 text-sm font-primaryMedium">
                      @ $5.50
                    </h3>
                  </div>
                </div>
              </div>

              <h3 className="text-rose900 font-primaryMedium text-base">
                $5.50
              </h3>
            </li>
          </ul>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-rose900">Order Total</p>
            <h2 className="font-primaryBold text-rose900 text-2xl">$46.50</h2>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="bg-primary text-base font-primaryMedium text-white rounded-full py-4 w-full"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
