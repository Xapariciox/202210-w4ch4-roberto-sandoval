import { useContext } from 'react';
import { IRobots } from '../../../models/robotsModels';

import { robotsContext } from '../context/context';
import { robots } from '';

export function RobotCard({ item }: { item: IRobots }) {
    const { robots } = useContext(robotsContext);

    // const handleClick = () => {
    //     handlerEraser(item.id);
    // };

    return (
        <>
            <div>
                <p>robot</p>
            </div>
            <li></li>
        </>
    );
}
