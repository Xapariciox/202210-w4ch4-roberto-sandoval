import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { RobotList } from './robots.list';

describe('Given TaskList component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <>
                    <RobotList />
                </>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('RobotList');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
