import api from "../../utils/api"
import Actions from "../reducers/actionTypes"
import { v4 } from 'uuid';



//1) API dan sepetteki verileri alıp reducer a aktaran thunk aksiyonu


export const getCart = () => (dispatch) => {
    dispatch({ type: Actions.CART_LOADING })

    api.get('/cart')
        .then((res) => dispatch({ type: Actions.CART_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: Actions.CART_ERROR, payload: err.message }))

}

//2)API 'a ve reducer'da tutulan state e yeni bir sepet elemanı ekler

export const addToBasket = (product, restName) => (dispatch) => {
    console.log(restName, product)



    //a) sepete eklenecek olan ürünün bilgilerini belirle

    const newItem = {
        id: v4(),
        productId: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo,
        restaurantName: restName,
        amount: 1,
    };
    //b) elemanı api'a ekle
    api.post('/cart', newItem)

    //c)basarili olursa reducer'a haber ver ve bildirim gönder
    dispatch({ type: Actions.ADD_ITEM, payload: newItem })
    alert('eleman sepete eklendi')
    //d) basarisiz olursa bildirim gönder
}