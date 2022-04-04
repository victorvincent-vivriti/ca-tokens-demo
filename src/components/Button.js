import React from "react";
import { Button } from "react-native";

const CAButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CAButton;
