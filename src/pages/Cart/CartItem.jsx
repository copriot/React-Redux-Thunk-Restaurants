import { FaPlus, FaTrash, FaMinus } from "react-icons/fa";
const CartItem = ({ itemData }) => {
  console.log(itemData);
  return (
    <div className="cartItem gap-4 border mb-10 rounded-lg p-4 hover:shadow-md">
      <div>
        <img
          className="w-[120px] rounded-lg"
          src={itemData.photo}
          alt="lorem-pic"
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl text-orange-500 font-semibold">
          {itemData.title}
        </h3>
        <p className="text-gray-500">{itemData.restaurantName}</p>

        <div className="flex justify-between items-end">
          <p className="font-semibold">{itemData.price} TL</p>

          <div className="border  rounded-xl text-lg inline-block place-items-center">
            <button className="p-3 rounded-xl text-red-600 transition hover:bg-red-100">
              {itemData.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="p-3">{itemData.amount}</span>
            <button className="p-3 rounded-xl text-cyan-600 transition hover:bg-cyan-100">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
