import React from "react";
import { List, InputItem, Button } from 'antd-mobile';
import './Login.scss';

const { Item } = List;

export class Loging extends React.Component {
    readonly props: any;
    readonly state: any;
    
    constructor(props: any) {
        super(props);
        this.state = { };
    }

    public render(): any {
        return (
            <form>
                <List
                    renderHeader={() => 'Form Validation'}
                    // renderFooter={() => "getFieldError('account') && getFieldError('account').join(',')"}
                >

                </List>
            </form>
        );
    }
}