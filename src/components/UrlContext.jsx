import React, { createContext, useState } from 'react';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [getfilter, setgetfilter] = useState('');

  return (
    <UrlContext.Provider value={{ getfilter, setgetfilter }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
