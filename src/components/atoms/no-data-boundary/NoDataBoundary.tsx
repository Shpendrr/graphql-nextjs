import React from "react";

export interface INoDataBoundaryProps {
  condition?: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const NoDataBoundary: React.FC<INoDataBoundaryProps> = ({
  condition = true,
  children,
  fallback,
}) => {
  return condition ? <>{children}</> : <>{fallback}</>;
};

export default NoDataBoundary;
