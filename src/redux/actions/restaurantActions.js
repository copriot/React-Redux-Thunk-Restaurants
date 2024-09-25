
//Asenkron Thunk Aksiyonu
//restoran verilerini alıp store aktaran bir aksiyon fonksiyonu yazıcaz
//normalde redux asenkron işlemler yapabilen aksiyonları kabul etmez bundan ötürü thunk aksiyonu olusturucaz

import api from "../../utils/api";
import ActionTypes from "../reducers/actionTypes";


//?Nasıl Tanımlanır
//Bir thunk fonksiyonu tanımlamak icin bir fonksiyon icerisinde ikinci fonksiyon return ederiz return ettigimiz fonksiyon dispatchi parametre olarak alır
// const thunkFunc = () => {
//     return (dispatch) => {
//         //api isteklerini burada atarız ve dispatch i parametre olarak aldıgı icin dispatch gerceklestirebiliriz
//     }
// }


//?İlk örnek
//1)restoran verilerini alıp store aktaran bir aksiyon fonksiyonu yazıcaz
export const getRestaurants = () => (dispatch) => {
    dispatch({ type: ActionTypes.REST_LOADING });

    api
        .get('/restaurants')
        .then((res) => dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data }))
        .catch((err) =>
            dispatch({ type: ActionTypes.REST_ERROR, payload: err.message })
        );
};