import images from '../data/images.json'
export const FETCH_IMAGES: string = 'IMAGES/FETCH_IMAGES'
export const UPDATE_IMAGE_DETAILS: string = 'IMAGES/UPDATE_IMAGE_DETAILS'
export const ADD_NEW_IMAGE: string = 'IMAGES/ADD_NEW_IMAGE'
export const REMOVE_IMAGE: string = 'IMAGES/REMOVE_IMAGE'
export const SHOW_SUCCESS: string = 'APP/SHOW_SUCCESS'
export const HIDE_SUCCESS: string = 'APP/HIDE_SUCCESS'
export const SHOW_ALERT: string = 'APP/SHOW_ALERT'
export const HIDE_ALERT: string = 'APP/HIDE_ALERT'

export interface Image {
  url: string,
  title: string,
  id: string | number,
  background: string,
  position: string
}

export const fetchImages = () =>
  (dispatch: Function) => {
    // here could be a fetch
    setTimeout(() => {
      return dispatch({ type: FETCH_IMAGES, payload: images })
    }, 2000);
  }

export const updateImageDetails = (updatedImage: Image) => async (dispatch: Function) => {
  try {
    dispatch({ type: UPDATE_IMAGE_DETAILS, payload: updatedImage })
    dispatch(showSuccess('Image has been successfully updated'))
  } catch (e) {
    dispatch(showAlert('Opps... Something went wrong. Try again'))
    console.error(e)
  }
}

export const addNewImage = (newImage: Image) => (dispatch: Function) => {
  try {
    dispatch({ type: ADD_NEW_IMAGE, payload: newImage })
    dispatch(showSuccess('Image has been successfully added'))
  } catch (e) {
    dispatch(showAlert('Opps... Something went wrong. Try again'))
    console.error(e)
  }
}

export const showSuccess = (text: string) => (dispatch: Function) => {
  dispatch({ type: SHOW_SUCCESS, payload: text })
  setTimeout(() => {
    dispatch({ type: HIDE_SUCCESS, payload: null })
  }, 3000);
}

export const showAlert = (text: string) => (dispatch: Function) => {
  dispatch({ type: SHOW_ALERT, payload: text })
  setTimeout(() => {
    dispatch({ type: HIDE_ALERT, payload: null })
  }, 3000);
}
