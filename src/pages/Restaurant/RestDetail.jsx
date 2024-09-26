import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { FaArrowUp } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
const RestDetail = () => {
  //productReducer'a abone ol
  const { isLoading, error, restaurant, products } = useSelector(
    (store) => store.products,
  );

  // console.log(isLoading);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="flex gap-5">
          <img
            className="w-[150px] max-md:w-[100px] rounded"
            src={restaurant?.photo}
            alt="rest-photo"
          />
          <div className="flex flex-col justify-between">
            <p className="opacity-60 flex gap-5">
              <span className="text-green-700 flex items-center gap-2">
                <FaArrowUp />
                min.{restaurant?.minPrice}₺
              </span>

              <span className="text-red-700 flex items-center gap-2">
                <FcAlarmClock />
                {restaurant?.estimatedDelivery}dak.
              </span>
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {restaurant?.name}
            </h1>
            <p className="flex items-center gap-2">
              <FaStar className="text-amber-400" />
              {restaurant?.rating}
              <button className="bg-slate-400 hover:bg-rose-400 hover:text-white transition-all px-1 rounded opacity-70">
                Yorumları Gör
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestDetail;
