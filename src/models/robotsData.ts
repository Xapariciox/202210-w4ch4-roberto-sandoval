import { IRobots } from './robotsModels';

export const robotsData: Array<IRobots> = [
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Pepe',
        image: 'https://robohash.org/2570:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 5,
        endurance: 9,
        dateOfCreation: new Date().toLocaleDateString(),
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Lucifer',
        image: 'https://robohash.org/200:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 5,
        endurance: 7,
        dateOfCreation: new Date().toLocaleDateString(),
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Enrique',
        image: 'https://robohash.org/2350:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 2,
        endurance: 3,
        dateOfCreation: new Date().toLocaleDateString(),
    },
];
