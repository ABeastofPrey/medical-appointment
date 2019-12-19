import React from 'react';
import LoginComponent from './store/login/component';
import { AppTabs } from './store/app-tabs/app-tabs';
// import { ErrorBoundary } from './components/Error-Boundary';
import './app.scss';

export class App extends React.Component {
    readonly state: { isLogin: boolean }

    constructor(props: any) {
        super(props);
        this.state = { isLogin: false };
    }

    public onLoginHandler(isLogin: boolean): void {
        this.setState({ isLogin });
    }

    public render(): any {
        return (
            <div className="App">
                {this.state.isLogin ? <AppTabs /> : <LoginComponent onLogin={this.onLoginHandler.bind(this)}/>}
            </div>
        );
    }
};
