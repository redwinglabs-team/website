import React, { createContext, useState } from 'react';

export const SRC_BOOK_A_DEMO = 'https://forms.monday.com/forms/embed/1d33bcb11c4d13483e5bd75d6b73ff7b';
export const SRC_PARTNERS = 'https://forms.monday.com/forms/embed/a694546bec0296f210b9ac0409a42761';
export const SRC_CONTACT_US = 'https://forms.monday.com/forms/embed/45ea393fe05be76ededfbcb65f3415d5';

const initialState = {
  open: false,
  src: null
};
export const IFrameSiderContext = createContext(null);

export const IFrameSiderProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const onOpen = (values) => {
    setState({ ...values, open: true });
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
