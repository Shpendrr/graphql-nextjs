interface IMission {
    name: string;
    flight: number;
}

interface IShip {
    id: string;
    name: string;
    type: string;
    home_port: string;
    image: string;
    url: string;
    missions: Mission[];
}

export { IShip, IMission };
