import React, { FC } from "react";

interface EmptyDataMessageProps {
  message?: string;
}

const EmptyDataMessage: FC<EmptyDataMessageProps> = ({ message }) => {
  return (
    <div className="text-center p-5">
      <p>{message || "No data available"}</p>
    </div>
  );
};

export default EmptyDataMessage;
