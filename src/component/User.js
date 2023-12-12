import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState("");

  console.log("user", user);
  const handleSearch = (e) => {
    const value = e.target;
    console.log("", value);
    setValue(value);
    // setUser(user.filter((item) => item == value));
  };
  const handleChangeValue = () => {
    const changeName = "Adalaj";
    console.log("user", user);
    let newArray = user;
    console.log("value", value);
    newArray.push(value);

    // const newArray = user.map((item) => {
    //   if (item == changeName) {
    //     item = "Girinath";
    //     return item;
    //   } else {
    //     return item;
    //   }
    // });
    console.log("newArray", newArray);
    setUser(newArray);
  };

  return (
    <div>
      <label>
        <input
          name="city"
          onchange={(e) => handleSearch(e.target.value)}
        ></input>
        <button onClick={() => handleChangeValue()}>Change value</button>
      </label>

      {user?.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};
