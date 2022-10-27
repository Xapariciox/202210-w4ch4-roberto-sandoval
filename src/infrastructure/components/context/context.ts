import { createContext } from 'react';
import { robots } from '../../../models/robots';
import { IRobots } from '../../../models/robotsModels';

const initialContext: {
    robots: Array<IRobots>;
} = {
    robots: robots,
};

export const robotsContext = createContext(initialContext);
