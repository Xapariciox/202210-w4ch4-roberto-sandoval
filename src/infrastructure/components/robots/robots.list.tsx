import { useContext } from 'react';
import { IRobots } from '../../../models/robotsModels';
import { robotsContext } from '../context/context';
import { RobotCard } from './robots.cards';

export const RobotList = () => {
    const { robots } = useContext(robotsContext);
    return (
        <section>
            <h2>Robots</h2>
            <ul>
                {robots.map((item: IRobots) => (
                    <RobotCard item={item}></RobotCard>
                ))}
            </ul>
        </section>
    );
};
