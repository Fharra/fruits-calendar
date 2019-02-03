import React from 'react';

export interface FruitListProps { list: string[]; }

export class FruitsList extends React.Component<FruitListProps, {}> {
    render() {
        return (<ul>
            {this.props.list.map((fruit, i) => <li key={i}>{fruit}</li>)}
        </ul>);
    }
}
