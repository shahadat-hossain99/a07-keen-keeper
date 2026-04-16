"use client";
import React, { createContext, useState } from "react";

export const LogContext = createContext();

const LogContextProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);
  //   console.log(timeLine);
  const addLog = (type, friend) => {
    const newLog = {
      id: Date.now(),
      friendId: friend.id,
      name: friend.name,
      type,
      date: new Date(),
    };
    setTimeLine((prev) => [...prev, addLog]);
  };

  const data = {
    timeLine,
    addLog,
  };

  return <LogContext.Provider value={data}>{children}</LogContext.Provider>;
};

export default LogContextProvider;
