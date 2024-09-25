import api from '../../utils/api'

//id'den yola cikarak hem restoranın hem restoanın ürünlerini verileri apiden alıp reducer'a aktarıcak async thunk aksiyon


export const getDataByRestaurantId = (id) => async (dispatch) => {
    //restaurantın bilgilerini verir
    const res = await api.get(`/restaurants/${id}`)


    //restoranın ürünlerinin verisi
    const res2 = await api.get(`/products?restaurantId=${id}`)
    console.log(res2.data)
}