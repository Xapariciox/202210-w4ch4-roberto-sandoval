import { useContext } from 'react';
import { robotsData } from '../../../models/robotsData';
import { IRobots } from '../../../models/robotsModels';
import { robotsContext } from '../context/context';
import { RobotCard } from './robots.cards';

export const RobotList = () => {
    const { handlerEraser, robots } = useContext(robotsContext);
    return (
        <section>
            <h1>Robots</h1>
            <ul className="robots">
                {robotsData.map((item: IRobots) => (
                    <RobotCard robot={item} key={item.name}></RobotCard>
                ))}
            </ul>
        </section>
    );
};
