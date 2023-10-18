import { gql } from "@apollo/client";


const SHIP_FRAGMENT = gql`
    fragment ShipFragment on Ship {
        id
        name
        type
        home_port
        image
        url
        missions {
        name
        flight
        }
    }
    `;

export const GET_SHIPS = gql`
    query GetShips {
        ships {
            ...ShipFragment
        }
    }
    ${SHIP_FRAGMENT}
    `;

export const GET_SHIP = gql`
    query GetShip($id: ID!) {
        ship(id: $id) {
            ...ShipFragment
        }
    }
    ${SHIP_FRAGMENT}
    `;

