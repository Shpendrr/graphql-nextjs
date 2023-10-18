import React from "react";

export interface IErrorFallbackProps {
  message: string;
}

const ErrorFallback: React.FC<IErrorFallbackProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorFallback;
