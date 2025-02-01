import ConfirmIcon from "../../assets/images/icon-order-confirmed.svg";

const OrderConfirmed = () => {
  return (
    <div className="absolute left-0 top-0 flex items-center justify-center bg-black/50 h-full w-full">
      <div className="bg-white w-full pt-10 px-6">
        <img className="" src={ConfirmIcon} alt="Tick Icon" />

        <h1 className="text-4xl font-primaryBold mb-8">Order Confirmed</h1>
      </div>
    </div>
  );
};

export default OrderConfirmed;
