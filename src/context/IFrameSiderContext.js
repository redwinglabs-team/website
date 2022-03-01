import React, { createContext, useState } from 'react';

export const SRC_BOOK_A_DEMO = 'https://forms.monday.com/forms/embed/1d33bcb11c4d13483e5bd75d6b73ff7b?r=use1';
const initialState = {
  open: false,
  src: null
};
export const IFrameSiderContext = createContext(null);

export const IFrameSiderProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const onOpen = ({ src }) => {
    setState({ open: true, src });
  };

  const onClose = () => {
    setState({ ...initialState });
  };
  return (
    <IFrameSiderContext.Provider
      value={{
        ...state,
        onOpen,
        onClose
      }}
    >
      {children}
    </IFrameSiderContext.Provider>
  );
};

export const IFrameSiderConsumer = IFrameSiderContext.Consumer;
