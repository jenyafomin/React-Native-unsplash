import * as type from './PhotoType'
// console.log(type)

export function FetchPhotosSRequest(){
    return {
        type:type.FETCH_PHOTOS_REQUEST
    }
}
export function FetchPhotosSuccess(data){
    return {
        type:type.FETCH_PHOTOS_SUCCESS,
        payload:data
    }
}

export function FetchPhotosError(error){
    return {
        type:type.FETCH_PHOTOS_ERROR,
        payload:error
    }
}

