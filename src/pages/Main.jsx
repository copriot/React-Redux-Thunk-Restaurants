import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/api";
import ActionTypes from "../redux/reducers/actionTypes";
const Main = () => {
  //store abone ol
  const restaurantState = useSelector((store) => store.restaurants);

  //dispatch kurulum
  const dispatch = useDispatch();

  //bileşen ekrana basıldığında api istegi at ve reducer ı güncelle
  useEffect(() => {
    //yüklenmenin başladıgını reducura bildir
    dispatch({ type: ActionTypes.REST_LOADING });
    api
      .get("/restaurants")
      //istek basarılı olursa verileri reducera aktar
      .then((res) =>
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data }),
      )
      //istek basarısız olursa hata mesajını reducura aktar
      .catch((error) =>
        dispatch({
          type: ActionTypes.REST_ERROR,
          payload: error.message,
        }),
      );
  }, []);

  console.log(restaurantState);
  return <div>Main</div>;
};

export default Main;
