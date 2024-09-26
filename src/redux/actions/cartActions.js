import { toast } from "react-toastify";
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
        //c)apidan olumlu cevap gelirse  reducer'a haber ver ve bildirim gönder
        .then(() => {
            dispatch({ type: Actions.ADD_ITEM, payload: newItem })
            toast.success(`${newItem.title} sepete eklendi`)

        })
        //d) apidan hata gelirse bildirim gönder
        .catch(() => toast.error('Üzgünüz bir sorun olustu'))


}


//3) Sepetteki elemanı güncelle (Miktar arttır ve azalt)
export const updateItem = (id, newAmount) => (dispatch) => {
    //a)apideki veriyi güncelle
    api.patch(`/cart/${id}`, { amount: newAmount })


        //b) istek basarisiz olursa reduer ' a haber ver
        .then((res) => {
            dispatch({ type: Actions.UPDATE_ITEM, payload: res.data });
            toast.info(`Ürün miktarı = ${newAmount}`);
        })


        //c)istek basarisiz olursa bildirim gönder
        .catch((error) => toast.error('Üzgünüz bir hata oluştu'))
}


//4)Sepetteki elemanı sepetten kaldır

export const deleteItem = (id) => (dispatch) => {
    api
        .delete(`/cart/${id}`)
        .then(() => {
            dispatch({ type: Actions.DELETE_ITEM, payload: id })
            toast.warning('Ürün sepetten kaldırıldı')
        })
        .catch(() => toast.error('Üzgünüz bir hata oluştu'))

}