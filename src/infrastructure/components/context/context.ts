import { createContext } from 'react';
import { IRobots } from '../../../models/robotsModels';

const initialContext: {
    robots: Array<IRobots>;
    handlerEraser: (name: string) => void;
} = {
    robots: [],
    handlerEraser: () => undefined,
};

export const robotsContext = createContext(initialContext);
