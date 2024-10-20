// src/context/ApiContext.js
import React, { createContext } from 'react';
import api from '../../utils/axios.js'; // Your Axios instance

// Create a context
export const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};