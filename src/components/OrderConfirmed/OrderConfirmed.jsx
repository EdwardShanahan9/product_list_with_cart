import ConfirmIcon from "../../assets/images/icon-order-confirmed.svg";
import ThumbnailImage from "../../assets/images/image-tiramisu-thumbnail.jpg";
const OrderConfirmed = () => {
  return (
    <div className="absolute left-0 top-0 flex items-center justify-center bg-black/50 h-full w-full">
      <div className="bg-white w-full pt-10 px-6">
        <img className="mb-6" src={ConfirmIcon} alt="Tick Icon" />

        <h1 className="text-4xl font-primaryBold mb-8">Order Confirmed</h1>

        <ul className="p-6 bg-rose50 mb-8">
          <li className="flex items-center justify-between pb-4 border-b border-rose100">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-md mr-4"
                src={ThumbnailImage}
                alt="Thumbnail Image"
              />

              <div className="flex direction flex-col">
                <h2 className="mb-1 text-sm text-rose500">Classic Tiramisu</h2>

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

            <h3 className="text-rose900 font-primaryMedium text-base">$5.50</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderConfirmed;
