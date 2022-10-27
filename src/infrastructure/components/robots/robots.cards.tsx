import { useContext } from 'react';
import { IRobots } from '../../../models/robotsModels';

import { robotsContext } from '../context/context';

export function RobotCard({ robot }: { robot: IRobots }) {
    const { handlerEraser } = useContext(robotsContext);

    return (
        <>
            <div>
                <h1>{robot.name}</h1>
                <img src={robot.image} alt="" />
            </div>
            <div className="info">
                <span> Endurance: {robot.endurance}</span>
                <span>dateOfCreation: {robot.dateOfCreation}</span>
                <span>Speed: {robot.speed}</span>

                <button
                    onClick={() => {
                        handlerEraser(robot.name);
                    }}
                >
                    delete ❌
                </button>
            </div>
        </>
    );
}
