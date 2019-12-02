import React from 'react';
import './Center.scss';

export class Center extends React.Component {
    readonly props: any;
    public render(): any {
        return <div>{this.props.children || <h1>There is nothing</h1>}</div>;
    }
}