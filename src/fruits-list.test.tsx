import { render } from 'react-testing-library';
import * as React from "react";
import { FruitsList } from './FruitsList';

it('list has one fruit', () => {
    let fruitsList = ['Orange'];
    expect(fruitsList).toHaveLength(1);
});

it('shows a list of fruits', () => {
    let fruitsList = ['Orange', 'Banana'];

    const { getByText } = render(<FruitsList list={fruitsList} />);
    expect(getByText('Orange')).toBeInTheDocument();
    expect(getByText('Banana')).toBeInTheDocument();
});