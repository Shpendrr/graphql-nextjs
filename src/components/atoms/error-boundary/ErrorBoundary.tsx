import React, { useState, useEffect, ReactNode } from "react";

interface IErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

const ErrorBoundary: React.FC<IErrorBoundaryProps> = ({
  fallback,
  children,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => setHasError(true);
    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return fallback;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
