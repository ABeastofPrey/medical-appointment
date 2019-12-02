import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { Appointment } from './appointment/Appointment';
import { Information } from './information/Information';
import { Header } from './header/Header';
import { equals } from 'ramda';
import './App.scss';

export enum Routes {
    Main = 'main',
    Info = 'info'
}

export class App extends React.Component {
    readonly state: { tab: Routes; }

    constructor(props: any) {
        super(props);
        this.state = { tab: Routes.Main };
    }

    private renderContainer(): any {
        const isMainTab = equals(Routes.Main, this.state.tab);
        return (
            <div className="App-container">
                <Header />
                {isMainTab ? <Appointment /> : <Information />}
            </div>
        );
    }

    public render(): any {
        const selectedTab = this.state.tab;
        const isMainTab = equals(Routes.Main, selectedTab);
        const isInfoTab = equals(Routes.Info, selectedTab);
        return (
            <div className="App">
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                    <TabBar.Item title="Appointment"
                        key={Routes.Main}
                        icon={(<Icon type="check"></Icon>)}
                        selectedIcon={(<Icon type="check-circle"></Icon>)}
                        selected={isMainTab}
                        onPress={() => this.setState({ tab: Routes.Main })}
                    >
                        {this.renderContainer()}
                    </TabBar.Item>
                    <TabBar.Item title="My"
                        key={Routes.Info}
                        icon={(<Icon type="cross-circle-o"></Icon>)}
                        selectedIcon={(<Icon type="cross-circle"></Icon>)}
                        selected={isInfoTab}
                        onPress={() => this.setState({ tab: Routes.Info })}
                    >
                        {this.renderContainer()}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
};
