import { IRobots } from './robotsModels';

export const robots: Array<IRobots> = [
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Fedor',
        image: 'https://robohash.org/2570:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 5,
        endurance: 10,
        dateOfCreation: new Date().toLocaleDateString(),
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Fedor',
        image: 'https://robohash.org/200:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 5,
        endurance: 10,
        dateOfCreation: new Date().toLocaleDateString(),
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Fedor',
        image: 'https://robohash.org/2550:6c5e:357f:e274:dd4:78bb:b35f:924d.png',
        speed: 5,
        endurance: 10,
        dateOfCreation: new Date().toLocaleDateString(),
    },
];
