import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { SiFireship } from "react-icons/si";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { isLoading, error, products, restaurant } = useSelector(
    (store) => store.products,
  );
  // console.log(products);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="text-3xl font-bold flex gap-2 items-center">
            <SiFireship className="text-red-600 " />
            Popüler
          </h2>
          <p className="text-gray-600">
            Restoranın en çok tercih edilen ürünleri
          </p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                restName={restaurant.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
