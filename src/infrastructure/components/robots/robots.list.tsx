import { useContext } from 'react';
import { IRobots } from '../../../models/robotsModels';
import { robotsContext } from '../context/context';
import { RobotCard } from './robots.cards';

export const RobotList = () => {
    const { robots } = useContext(robotsContext);
    return (
        <section>
            <h1>!Robots!</h1>
            <ul className="robots">
                {robots.map((item: IRobots) => (
                    <RobotCard robot={item} key={item.name}></RobotCard>
                ))}
            </ul>
        </section>
    );
};
