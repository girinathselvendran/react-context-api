import React, { useState } from "react";
import UserContext from "./UserContext";
import { CityList } from "../data";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(CityList);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
