import React, { FunctionComponent } from "react";

export interface IContainer {
  children: React.ReactNode;
}

const Container: FunctionComponent<IContainer> = ({ children }) => {
  return <div className="max-w-[1500px] mx-auto p-2">{children}</div>;
};

export default Container;
