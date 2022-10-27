import { useState } from 'react';
import { robotsData } from '../../../models/robotsData';

import { IRobots } from '../../../models/robotsModels';

import { robotsContext } from './context';

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<IRobots> = [...robotsData];
    const [robots, setRobots] = useState(initialRobots);

    const handlerEraser = (name: string) => {
        setRobots(robotsData.filter((item) => item.name !== name));
    };

    const context = {
        robots,
        handlerEraser,
    };

    return (
        <robotsContext.Provider value={context}>
            {children}
        </robotsContext.Provider>
    );
}
