import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './header.scss';

export class Header extends React.Component {
    private leftClickHandler(e: any): void {
        console.log('back');
        e.preventDefault();
    }
    public render(): any {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    onLeftClick={this.leftClickHandler}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </div>
        );
    }
}