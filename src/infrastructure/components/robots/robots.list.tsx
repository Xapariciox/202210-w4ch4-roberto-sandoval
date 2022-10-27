import { robotsData } from '../../../models/robotsData';
import { IRobots } from '../../../models/robotsModels';

import { RobotCard } from './robots.cards';

export const RobotList = () => {
    return (
        <section>
            <h1>!Robots!</h1>
            <ul className="robots">
                {robotsData.map((item: IRobots) => (
                    <RobotCard robot={item} key={item.name}></RobotCard>
                ))}
            </ul>
        </section>
    );
};
