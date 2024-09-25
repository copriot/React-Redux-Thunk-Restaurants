import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error from "../components/Error";
import Loader from "../components/Loader";
import RestCard from "../components/RestCard";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";
const Main = () => {
  //store abone ol
  const { isLoading, error, restaurants, retry } = useSelector(
    (store) => store.restaurants,
  );

  //dispatch kurulum
  const dispatch = useDispatch();

  //bileşen ekrana basıldığında api istegi at ve reducer ı güncelle
  // useEffect(() => {
  //   //yüklenmenin başladıgını reducura bildir
  //   dispatch({ type: ActionTypes.REST_LOADING });
  //   api
  //     .get("/restaurants")
  //     //istek basarılı olursa verileri reducera aktar
  //     .then((res) =>
  //       dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data }),
  //     )
  //     //istek basarısız olursa hata mesajını reducura aktar
  //     .catch((error) =>
  //       dispatch({
  //         type: ActionTypes.REST_ERROR,
  //         payload: error.message,
  //       }),
  //     );
  // }, []);

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restorantlar</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} retry={() => dispatch(getRestaurants())} />
      ) : (
        <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((rest) => (
            <RestCard key={rest.id} data={rest} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Main;
