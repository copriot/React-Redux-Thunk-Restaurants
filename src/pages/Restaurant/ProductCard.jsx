import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../../redux/actions/cartActions";

const ProductCard = ({ product, restName }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //mevcut ürünü  sepette bul
  const found = cart.find((i) => i.productId === product.id);

  //sepete ekler
  const handleAdd = () => {
    //eğer ürün sepette daha önce varsa miktarını arttır
    if (found) {
      dispatch(updateItem(found.id, found.amount + 1));
    }
    //sepette yoksa sepete ekle
    else {
      dispatch(addToBasket(product, restName));
    }
  };
  console.log(cart);
  return (
    <div className=" card m-3 border p-2 shadow hover:bg-amber-100 hover:translate-y-1 hover:shadow-xl transition cursor-pointer">
      <div className=" flex flex-col justify-between">
        <div>
          <div className="flex gap-3">
            <h2 className="text-orange-500 font-bold">{product?.category}</h2>
            <h2 className="text-lime-600 font-bold">{product?.title}</h2>
          </div>
        </div>
        <p className="text-gray-600">{product?.desc}</p>
        <p className="font-semibold">{product?.price}₺</p>
      </div>
      <div className="relative">
        <img
          src={product?.photo}
          alt="product-photo"
          className="w-[150px] h-[130px] object-cover rounded  "
        />
        <button
          onClick={handleAdd}
          className="border border-2 rounded-full text-black bg-white absolute bottom-1 right-2 hover:bg-cyan-400 transition w-8 h-8 grid place-items-center"
        >
          {found ? (
            <span className="font-bold">{found.amount}</span>
          ) : (
            <FaPlus className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
