import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataByRestaurantId } from "../redux/actions/productAction";
const Restaurant = () => {
  //urldeki restoranın idsini temsil eden parametreye erişme
  const { id } = useParams();

  //useDispatch kurulumu
  const dispatch = useDispatch();

  //bileşen ekrana basıldığında idden yola cıkarak restorant ve ürünlerin bilgilerini apidan al ve reducar a aktar
  useEffect(() => {
    dispatch(getDataByRestaurantId(id));
  }, []);
  return (
    <Container>
      <h1 className="text-3xl">Restorant Sayfası</h1>
    </Container>
  );
};

export default Restaurant;
