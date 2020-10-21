// to keep track of desired text size...

import React, { useEffect, useState, createContext } from 'react';
import { AsyncStorage } from 'react-native';

export const TEXT_KEY = 'TEXT';

export const TextContext = createContext({
  textSize: 3,
  setTextSize: () => {},
});

export const TextContextProvider = (props) => {
  const setTextSize = async (textSize) => {
    if (textSize > 5 || textSize < 1) {
      return;
    }

    setState({ ...state, textSize: textSize });
    try {
      await AsyncStorage.setItem(TEXT_KEY, JSON.stringify(textSize));
    } catch (e) {
      alert(e);
    }
  };

  const initState = {
    textSize: 3,
    setTextSize: setTextSize,
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    textSetter();
  }, []);

  async function textSetter() {
    try {
      const value = await AsyncStorage.getItem(TEXT_KEY); //null; //
      if (value !== null) {
        const textSize = JSON.parse(value);

        setTextSize(textSize);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TextContext.Provider value={state}>{props.children}</TextContext.Provider>
  );
};
