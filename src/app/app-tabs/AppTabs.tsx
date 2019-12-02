import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { Appointment } from './appointment/Appointment';
import { Information } from './information/Information';
import { Header } from '../header/Header';
import { equals } from 'ramda';

export enum MainTabs {
    Main = 'mainTab',
    Info = 'infoTab'
}

export class AppTabs extends React.Component {
    readonly state: { tab: MainTabs; }

    constructor(props: any) {
        super(props);
        this.state = { tab: MainTabs.Main };
    }

    private renderContainer(): any {
        const isMainTab = equals(MainTabs.Main, this.state.tab);
        return (
            <div className="App-container">
                <Header />
                {isMainTab ? <Appointment /> : <Information />}
            </div>
        );
    }

    public render(): any {
        const selectedTab = this.state.tab;
        const isMainTab = equals(MainTabs.Main, selectedTab);
        const isInfoTab = equals(MainTabs.Info, selectedTab);
        return (
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                <TabBar.Item title="Appointment"
                    key={MainTabs.Main}
                    icon={(<Icon type="check"></Icon>)}
                    selectedIcon={(<Icon type="check-circle"></Icon>)}
                    selected={isMainTab}
                    onPress={() => this.setState({ tab: MainTabs.Main })}
                >
                    {this.renderContainer()}
                </TabBar.Item>
                <TabBar.Item title="My"
                    key={MainTabs.Info}
                    icon={(<Icon type="cross-circle-o"></Icon>)}
                    selectedIcon={(<Icon type="cross-circle"></Icon>)}
                    selected={isInfoTab}
                    onPress={() => this.setState({ tab: MainTabs.Info })}
                >
                    {this.renderContainer()}
                </TabBar.Item>
            </TabBar>
        );
    }
};
