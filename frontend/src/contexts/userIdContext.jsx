// write userId and name to localstorage
//
// source of truth is localstorage so,
// if cookies are cleared then user is "refreshed"
// must sync userId to server on connect to route current socket to correct room

// username is just for display
import React, { createContext, useMemo } from "react";
import { getOrDefault } from "../utils/localStorage";

const UserIdContext = createContext();

const UserIdProvider = ({ children }) => {
  const userId = useMemo(() => getOrDefault("userId", crypto.randomUUID()), []);
  return (
    <UserIdContext.Provider value={userId}>
      {children}
    </UserIdContext.Provider>
  );
};

export { UserIdContext, UserIdProvider };
