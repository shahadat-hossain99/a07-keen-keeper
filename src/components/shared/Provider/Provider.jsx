"use client";

import LogContextProvider from "@/context/log.context";
import React from "react";

const Provider = ({ children }) => {
  return <LogContextProvider>{children}</LogContextProvider>;
};

export default Provider;
