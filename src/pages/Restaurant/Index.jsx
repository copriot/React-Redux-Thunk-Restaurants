import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataByRestaurantId } from "../../redux/actions/productAction";
import RestDetail from "./RestDetail";
import ProductDetail from "./ProductDetail";

const Restaurant = () => {
  //productReducer'a abone ol
  const { isLoading, error, restaurant, products } = useSelector(
    (store) => store.products,
  );

  //urldeki restoranın idsini temsil eden parametreye erişme
  const { id } = useParams();

  //useDispatch kurulumu
  const dispatch = useDispatch();

  //bileşen ekrana basıldığında idden yola cıkarak restorant ve ürünlerin bilgilerini apidan al ve reducar a aktar
  useEffect(() => {
    dispatch(getDataByRestaurantId(id));
  }, []);
  return (
    <>
      <div className="border border-b-4 border-b-cyan-600">
        <Container>
          <RestDetail />
        </Container>
      </div>

      <Container>
        <ProductDetail />
      </Container>
    </>
  );
};

export default Restaurant;
