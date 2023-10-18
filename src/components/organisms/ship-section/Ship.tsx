import { GET_SHIPS } from "@/api/Ship";
import LoadingScreen from "@/components/atoms/loading-screen/LoadingScreen";
import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { toast } from "react-toastify";
import ShipList from "@/components/organisms/ship-section/ShipList/ShipList";
import NoDataBoundary from "@/components/atoms/no-data-boundary/NoDataBoundary";
import EmptyDataMessage from "@/components/atoms/empty-data/EmptyData";
import { IShip } from "@/lib/types/ship.types";
import ErrorBoundary from "@/components/atoms/error-boundary/ErrorBoundary";
import ErrorFallback from "@/components/atoms/error-fallback/ErrorFallback";

export interface IShipProps {}

const Ship: FC<IShipProps> = ({}) => {
  const { loading, error, data } = useQuery<{ ships: IShip[] }>(GET_SHIPS);

  if (error) toast.error(error.message);

  return (
    <LoadingScreen loading={loading}>
      <ErrorBoundary
        fallback={
          <ErrorFallback message="An error occurred. Please try again later." />
        }
      >
        <NoDataBoundary
          condition={data && data.ships && data.ships.length > 0}
          fallback={<EmptyDataMessage />}
        >
          <ShipList data={data?.ships || []} />
        </NoDataBoundary>
      </ErrorBoundary>
    </LoadingScreen>
  );
};

export default Ship;
