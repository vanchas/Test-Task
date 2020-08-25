import { FETCH_IMAGES, UPDATE_IMAGE_DETAILS, ADD_NEW_IMAGE, SHOW_SUCCESS, SHOW_ALERT, HIDE_ALERT, HIDE_SUCCESS, Image, REMOVE_IMAGE } from './adminActions'

type Images = null | Array<Image>

interface State {
  images: Images,
  success: null | string,
  alert: null | string
}

interface Action {
  type: string
  payload?: any
}

const initialState: State = {
  images: null,
  success: null,
  alert: null
}

export default function adminReducer(state = initialState, action: Action) {
  switch (action.type) {

    case REMOVE_IMAGE:
      // @ts-ignore
      const filteredImages = state.images.filter(i => i.id !== action.payload)
      return { ...state, images: filteredImages }

    case SHOW_ALERT:
      return { ...state, alert: action.payload }

    case SHOW_SUCCESS:
      return { ...state, success: action.payload }

    case HIDE_ALERT:
      return { ...state, alert: action.payload }

    case HIDE_SUCCESS:
      return { ...state, success: action.payload }

    case FETCH_IMAGES:
      return { ...state, images: action.payload }

    case ADD_NEW_IMAGE:
      return { ...state, images: [...state.images, action.payload] }

    case UPDATE_IMAGE_DETAILS:
      // @ts-ignore
      const updatedImages = state.images.map(img => {
        if (img.id === action.payload.id) {
          return img = action.payload
        }
        return img
      })
      return { ...state, images: updatedImages }

    default:
      return state
  }
}
