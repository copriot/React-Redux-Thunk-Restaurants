import api from '../../utils/api'
import Actions from '../reducers/actionTypes'
//id'den yola cikarak hem restoranın hem restoanın ürünlerini verileri apiden alıp reducer'a aktarıcak async thunk aksiyon


export const getDataByRestaurantId = (id) => async (dispatch) => {

    //reducer'a yüklenmenin basladıgınu bildir
    dispatch({ type: Actions.PROD_LOADING })

    //restaurantın bilgilerini verir
    const req1 = api.get(`/restaurants/${id}`)


    //restoranın ürünlerinin verisi
    const req2 = api.get(`/products?restaurantId=${id}`)



    try {
        //iki farklı api istegini aynı anda atarak kullanıcıya veriyi daha hızlı yansıt Promise.all([]) ' kullanarak dizi istiyor istekler için
        const responses = await Promise.all([req1, req2]);


        //apiden veriler basariyla gelirse tetiklenicek aksiyon
        dispatch({ type: Actions.PROD_SUCCESS, payload: responses })
    }
    catch (error) {
        dispatch({ type: Actions.PROD_ERROR, payload: error.message })
    }
};