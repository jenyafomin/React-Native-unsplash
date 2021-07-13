import axios from 'axios'
import * as type from './PhotoType'
import * as actions from './ActionType'
// import {createApi} from 'unsplash-js'



const token = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
// const unsplash = createApi({
//     accessKey:token,
// })


const initialValue = {
    loading:true,
    page:1,
    data:[],
    error:''
}

function reducer(state = initialValue, action) {
    switch (action.type){
        case type.FETCH_PHOTOS_REQUEST: 
        
            return {
                ...state,
                loading:true
            }
        case type.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case type.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                loading:false,
                data:[],
                error:action.payload
            }
        case type.ADD_PHOTOS:{
            return {
                ...state,
                page:state.page+1,
                data:state.data.concat(action.payload)
            }
        }
        default:
            return state
    }
}


export function FetchPhotos(optional='tree',page=1,perPage=10){
    return (dispatch) => {
        dispatch(actions.FetchPhotosSRequest())
        axios.get('https://api.unsplash.com/search/photos', {
            params:{
                // Authorization: "Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
                query:optional,
                client_id: "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
                page:page,
                // color:'green',
                per_page:perPage,
            }
        })
        .then(res => {
            dispatch(actions.FetchPhotosSuccess(res.data))
            // setUser(res.data)
            // setLoading(false)
        })
        .catch(err => {
            console.log(err); 
            setLoading(false)
            dispatch(actions.FetchPhotosError(err.message))
        })
    }
}


export default reducer