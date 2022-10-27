import { useState } from 'react';
import { robots } from '../../../models/robots';
import { IRobots } from '../../../models/robotsModels';

import { robotsContext } from './context';

export function TodoContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<IRobots> = [];
    const [robots] = useState(initialRobots);
    const context = {
        robots,
    };
    return (
        <robotsContext.Provider value={context}>
            {children}
        </robotsContext.Provider>
    );
}
