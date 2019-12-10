import React from 'react';
import { SignIn, SignInTest } from './sign-in/sign-in';
import { AppTabs } from './app-tabs/AppTabs';
// import { ErrorBoundary } from './components/Error-Boundary';
import './App.scss';

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
                {/* {this.state.isLogin ? <AppTabs /> : <SignIn onLogin={this.onLoginHandler.bind(this)}/>} */}
                {<SignInTest />}
            </div>
        );
    }
};
