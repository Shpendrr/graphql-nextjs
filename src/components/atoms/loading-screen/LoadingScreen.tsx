import { FunctionComponent } from "react";

export interface ILoadingScreenProps {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingScreen: FunctionComponent<ILoadingScreenProps> = ({
  loading,
  children,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen absolute bg-white top-0 left-0 !bottom-0 right-0 w-full">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#009f71] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingScreen;
