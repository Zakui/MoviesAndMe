// Store/Reducers/favoriteReducer.js

const initialState = { mesFilmsVu: [] }

function toggleFilmsVu(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FILM_VU':
      const mesFilmVuIndex = state.mesFilmsVu.findIndex(item => item.id === action.value.id)
      if (mesFilmVuIndex !== -1) {
        // Le film est déjà dans les films vu, on le supprime de la liste
        nextState = {
          ...state,
          mesFilmsVu: state.mesFilmsVu.filter( (item, index) => index !== mesFilmVuIndex)
        }
      }
      else {
        // Le film n'est pas dans les films vu favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          mesFilmsVu: [...state.mesFilmsVu, action.value]
        }
      }
      return nextState || state
    default:
      return state
  }
}

export default toggleFilmsVu
