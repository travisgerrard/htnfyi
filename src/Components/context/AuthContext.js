import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import authApi from '../../api';
import { navigate } from '../navigationRef';
import * as Network from 'expo-network';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'set_account_details':
      return { ...state, accountDetails: action.payload };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('Main');
  } else {
    navigate('Auth');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signin = (dispatch) => async (accessCode) => {
  if (!accessCode.accessCode.length) {
    dispatch({
      type: 'add_error',
      payload: 'Acces Code Cannot Be Blank',
    });
    return;
  }

  // const network = await Network.getNetworkStateAsync();
  // if (!network.isConnected) {
  //   dispatch({
  //     type: 'add_error',
  //     payload: 'Not connected to the internet',
  //   });
  //   return;
  // }

  console.log(accessCode.accessCode);

  try {
    // const response = await authApi.post('/', accessCode);

    if (accessCode.accessCode === '12345') {
      await AsyncStorage.setItem('token', accessCode.accessCode);
      dispatch({ type: 'signin', payload: accessCode.accessCode });
    } else {
      dispatch({
        type: 'add_error',
        payload: 'wrong access code',
      });
      return;
    }
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.response.data.message,
    });
    return;
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: 'signout',
  });
  if (Platform.OS === 'web') {
    Router.push('/');
  } else {
    navigate('loginFlow');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
  },
  { token: null, errorMessage: '', accountDetails: null }
);
