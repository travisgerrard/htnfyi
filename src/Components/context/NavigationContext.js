import createDataContext from './createDataContext';

const navigationReducer = (state, action) => {
  switch (action.type) {
    case 'updateNavigation':
      return { ...state, ...action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const setNavigation = (dispatch) => async ({ navigationInformation }) => {
  try {
    dispatch({
      type: 'updateNavigation',
      payload: navigationInformation,
    });
  } catch (e) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with updating navigation',
    });
  }
  dispatch({ type: 'setNextOnReadingList', payload: nextOnReadingList });
};

export const { Provider, Context } = createDataContext(
  navigationReducer,
  { setNavigation },
  {
    sectionId: null,
    subSectionId: null,
    subSectionTitle: null,
    errorMessage: '',
  }
);
