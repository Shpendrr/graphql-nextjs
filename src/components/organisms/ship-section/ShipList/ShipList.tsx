import { IShip } from "@/lib/types/ship.types";
import React, { FC, Fragment } from "react";
import Image from "next/image";

export interface IShipListProps {
  data: Array<IShip>;
}

const ShipList: FC<IShipListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto my-10">
      {Object.entries(data).map(([key, value]) => {
        return (
          <div
            key={`ship-key-${key}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={value.image ?? ""}
                alt={value.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-bold mb-2">{value.name}</h1>
              <p className="text-gray-700">{value.missions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipList;
