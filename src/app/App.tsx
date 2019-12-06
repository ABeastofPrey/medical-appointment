import React from 'react';
import { Loging } from './login/Login';
import { AppTabs } from './app-tabs/AppTabs';
// import { ErrorBoundary } from './components/Error-Boundary';
import './App.scss';

export class App extends React.Component {
    readonly state: { isLogin: boolean }

    constructor(props: any) {
        super(props);
        this.state = { isLogin: false };
    }

    public onLoginHandler(): void {
        console.log('login')
        this.setState({ isLogin: true });
    }

    public render(): any {
        return (
            <div className="App">
                {this.state.isLogin ? <AppTabs /> : <Loging onLogin={this.onLoginHandler.bind(this)}/>}
            </div>
        );
    }
};
